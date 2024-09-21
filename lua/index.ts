import * as tstl from 'npm:typescript-to-lua';

const dir = './mod';
const files = Deno.readDirSync(dir);
const index = new Map<string, string>();

for (const file of files) {
  if (file.name.endsWith('.ts')) {
    index.set(file.name, Deno.readTextFileSync(`${dir}/${file.name}`));
  }
}

const result = tstl.transpileVirtualProject(
  Object.fromEntries(index),
  {
    luaTarget: tstl.LuaTarget.Lua54,
    luaSourceMap: true,
    sourceMap: true,
  },
);

for (const file of result.transpiledFiles) {
  const path = `${dir}/${file.outPath}`;

  if (!file.lua) {
    console.error(`[${path}] No lua output`);
    continue;
  }

  if (!file.luaSourceMap) {
    console.error(`[${path}] No source map output`);
    continue;
  }

  Deno.writeTextFileSync(`${path}`, file.lua);
  Deno.writeTextFileSync(`${path}.map`, file.luaSourceMap);
}
