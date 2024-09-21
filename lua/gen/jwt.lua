local ____lualib = require("lualib_bundle")
local __TS__SourceMapTraceBack = ____lualib.__TS__SourceMapTraceBack
__TS__SourceMapTraceBack(debug.getinfo(1).short_src, {["5"] = 1,["6"] = 1,["7"] = 3,["8"] = 5,["9"] = 6,["10"] = 7,["11"] = 9,["12"] = 11,["13"] = 13,["14"] = 14,["15"] = 16,["16"] = 17,["17"] = 19,["18"] = 20});
local ____exports = {}
local ____test_2Ejson = require("test")
local test = ____test_2Ejson.default
print(test)
redis:call("set", "some-key", "some-value")
redis:call("set", "x", 1)
redis:call("expire", "hello")
redis:sha1hex("hello")
redis:log(redis.LOG_DEBUG, "1")
redis:setresp(2)
redis:setresp(3)
redis:log(redis.LOG_DEBUG, "")
cjson:decode("{\"name\": \"tstl-redis\"}")
redis:call("setnx", "name", "value")
redis:call("set", "hello", "value")
return ____exports
