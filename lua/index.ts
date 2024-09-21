import * as tstl from 'npm:typescript-to-lua';

const src = './mod';
const out = './gen';
const files = Deno.readDirSync(src);
const index = new Map<string, string>();

for (const file of files) {
  if (file.name.endsWith('.ts')) {
    index.set(file.name, Deno.readTextFileSync(`${src}/${file.name}`));
  }
}

const result = tstl.transpileVirtualProject(
  Object.fromEntries(index),
  {
    luaTarget: tstl.LuaTarget.Lua54,
    luaSourceMap: true,
    noHeader: true,
    sourceMap: true,
    sourceMapTraceback: true,
    resolveJsonModule: true,
  },
);

for (const file of result.transpiledFiles) {
  const path = `${out}/${file.outPath}`;
  if (file.lua)
    Deno.writeTextFileSync(`${path}`, file.lua);
  if (file.luaSourceMap)
    Deno.writeTextFileSync(`${path}.map`, file.luaSourceMap);
}
