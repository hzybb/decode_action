//Sat Sep 14 2024 07:37:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    sign: _0x39595a,
    getToken: _0x4dd051,
    wait: _0x41bea2,
    checkCk: _0x1df37a,
    validateCarmeWithType: _0x235be7,
    User_Agent: _0x113878,
    getCookies: _0x127952,
    checkCarmeCount: _0x41e3dd,
    getUserInfo: _0x3fb4c6,
    tryCatchPromise: _0x516b79,
    getCookieMap: _0x48fffb
  } = require("./common.js"),
  {
    sendNotify: _0xc3c3b
  } = require("./ele_sendNotify.js"),
  _0x21e648 = require("moment"),
  _0x423c19 = require("request"),
  _0x468b68 = 10,
  _0x1fe53a = "异常";
let _0x391178 = _0x127952();
const _0x1936bc = process.env.ELE_CARME;
var _0x550e4d = "| 昵称          | 乐园币    | 总吃货豆 |余额 |\n| ------------- | ------------------ | ---------|---------|\n";
function _0x3c6c4c() {
  return _0x21e648().format("YYYY-MM-DD");
}
function _0x39f81e() {
  var _0x127ff5 = new Date(),
    _0x5a467e = _0x127ff5.getMonth() + 1,
    _0x3d089b = _0x127ff5.getDate();
  return _0x5a467e <= 9 && (_0x5a467e = "0" + _0x5a467e), _0x3d089b <= 9 && (_0x3d089b = "0" + _0x3d089b), _0x127ff5.getFullYear() + "-" + _0x5a467e + "-" + _0x3d089b;
}
function _0xd0707b(_0x1b34f3) {
  const _0x1471d5 = {
    "url": "https://httpizza.ele.me/walletUserV2/storedcard/queryBalanceBycardType?cardType=platform",
    "headers": {}
  };
  return _0x1471d5.headers.Cookie = _0x1b34f3, _0x1471d5.headers["User-Agent"] = _0x113878, _0x1471d5.headers.referer = "https://r.ele.me/alsc-wallet/home.html?channel=grzx", _0x516b79(_0x822082 => {
    _0x423c19(_0x1471d5, async (_0x30e3f3, _0x327ad8, _0x2da479) => {
      if (!_0x30e3f3 && _0x327ad8.statusCode == 200) try {
        const _0x11021e = JSON.parse(_0x2da479),
          _0x56ddf7 = _0x11021e.data.totalAmount;
        _0x822082(_0x56ddf7);
      } catch (_0x649ef0) {
        console.log("Error parsing response:", _0x2da479);
        _0x822082(null);
      } else console.log("Request failed:", _0x30e3f3), _0x822082(null);
    });
  });
}
function _0x78ca4c(_0xfd5225) {
  const _0x53151a = {
      "Cookie": _0xfd5225,
      "User-Agent": _0x113878
    },
    _0x276bb6 = {
      "url": "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
      "headers": _0x53151a
    };
  return _0x516b79(_0x12b97c => {
    _0x423c19(_0x276bb6, async (_0x201aa6, _0x5289e3, _0x202168) => {
      if (!_0x201aa6 && _0x5289e3.statusCode == 200) {
        const _0x55e271 = JSON.parse(_0x202168);
        try {
          _0x12b97c(_0x55e271.peaCount);
        } catch (_0x1cfee5) {
          console.log(_0x202168);
          _0x12b97c(null);
        }
      } else {
        _0x12b97c(null);
      }
    });
  });
}
async function _0x34fbfc(_0x4c8874) {
  const _0x3389bb = {
    "content-type": "application/json",
    "Cookie": _0x4c8874,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x3389bb;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x4b9203 = {
    "url": r,
    "headers": s
  };
  return _0x516b79(_0x10f5cb => {
    _0x423c19(_0x4b9203, async (_0x571d5f, _0x5a7c87, _0x595808) => {
      if (!_0x571d5f && _0x5a7c87.statusCode == 200) {
        const _0x13a24f = JSON.parse(_0x595808);
        try {
          for (var _0x3aee82 = _0x39f81e(), _0x20650b = _0x13a24f.records, _0x1cac6e = 0, _0x1e03bc = 0; _0x1e03bc < _0x20650b.length; _0x1e03bc++) {
            _0x20650b[_0x1e03bc].createdTime.indexOf(_0x3aee82) > -1 && 1 == _0x20650b[_0x1e03bc].optType && (_0x1cac6e += _0x20650b[_0x1e03bc].count);
          }
          _0x10f5cb(_0x1cac6e);
        } catch (_0x1df8b9) {
          console.log(_0x595808);
          _0x10f5cb(null);
        }
      } else _0x10f5cb(null);
    });
  });
}
async function _0x240535(_0x32af4f) {}
async function _0x125232(_0x57ba4e, _0x4336e9) {
  const _0x4c9cd7 = {
      "authority": "shopping.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "origin": "https://r.ele.me",
      "pragma": "no-cache",
      "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
      "cookie": _0x57ba4e,
      "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x234871 = new Date().getTime(),
    _0xe8ace4 = 12574478;
  var _0x4aa399 = "data=" + encodeURIComponent(JSON.stringify(_0x4336e9));
  const _0x328a37 = _0x4dd051(_0x57ba4e),
    _0x1c8b96 = _0x328a37.split("_")[0],
    _0x578182 = await _0x39595a(_0x1c8b96 + "&" + _0x234871 + "&" + _0xe8ace4 + "&" + JSON.stringify(_0x4336e9), _0x1936bc),
    _0x1a1fef = {
      "url": "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x234871 + "&sign=" + _0x578182 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
      "method": "POST",
      "headers": _0x4c9cd7,
      "body": _0x4aa399
    };
  return _0x516b79(_0x2926f9 => {
    _0x423c19(_0x1a1fef, async (_0x2fc318, _0x776631, _0x473407) => {
      if (!_0x2fc318 && _0x776631.statusCode == 200) try {
        const _0x38514f = JSON.parse(_0x473407),
          _0x1cb03d = JSON.parse(_0x38514f.data.data);
        _0x2926f9(_0x1cb03d);
      } catch (_0x346a97) {
        console.log(_0x473407);
        _0x2926f9(null);
      } else _0x2926f9(null);
    });
  });
}
async function _0x3a0e41(_0x2240cc, _0x229aa1) {
  const _0x1565fc = {
      "authority": "mtop.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "cookie": _0x2240cc,
      "origin": "https://tb.ele.me",
      "pragma": "no-cache",
      "referer": "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x25fa25 = {
      "templateId": "1404",
      "bizScene": "game_center",
      "convertType": "GAME_CENTER",
      "startTime": _0x3c6c4c() + " 00:00:00",
      "pageNo": _0x229aa1,
      "pageSize": "20"
    },
    _0x5a3816 = new Date().getTime(),
    _0x188896 = 12574478;
  var _0x4df1e3 = "data=" + encodeURIComponent(JSON.stringify(_0x25fa25));
  const _0x561d6d = _0x4dd051(_0x2240cc),
    _0x388a67 = _0x561d6d.split("_")[0],
    _0xdec3ae = await _0x39595a(_0x388a67 + "&" + _0x5a3816 + "&" + _0x188896 + "&" + JSON.stringify(_0x25fa25), _0x1936bc),
    _0x49ed4c = {
      "url": "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.querypropertydetail/1.0/?jsv=2.7.1&appKey=12574478&t=" + _0x5a3816 + "&sign=" + _0xdec3ae + "&api=mtop.koubei.interaction.center.common.querypropertydetail&v=1.0",
      "method": "POST",
      "headers": _0x1565fc,
      "body": _0x4df1e3
    };
  return _0x516b79(_0x4a8b43 => {
    _0x423c19(_0x49ed4c, async (_0x19175e, _0x326916, _0x4cf411) => {
      if (!_0x19175e && _0x326916.statusCode === 200) {
        const _0x42ebe7 = JSON.parse(_0x4cf411);
        try {
          if (_0x42ebe7.data) {
            var _0x1b5aaf = 0;
            for (let _0x271c9d = 0; _0x271c9d < _0x42ebe7.data.list.length; _0x271c9d++) {
              const _0x536e50 = _0x42ebe7.data.list[_0x271c9d];
              _0x536e50.detailType === "GRANT" && _0x536e50.gmtModified.indexOf(_0x3c6c4c()) !== -1 && (_0x1b5aaf += Number(_0x536e50.amount));
            }
          }
          _0x4a8b43(_0x1b5aaf);
        } catch (_0x20fab2) {
          console.log(_0x4cf411);
        }
        _0x4a8b43(_0x42ebe7);
      } else _0x4a8b43(null);
    });
  });
}
async function _0x589ae9(_0x29f701) {
  const _0x2be38f = {
      "authority": "mtop.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "cookie": _0x29f701,
      "origin": "https://tb.ele.me",
      "pragma": "no-cache",
      "referer": "https://tb.ele.me/wow/alsc/mod/3fe8408d9ba38d4726448a87?geohash=wssuj22rzrwn&spm-pre=a2ogi.13684611.0.0&spm=a13.b_activity_kb_m71293.0.0",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x30f5b8 = {
      "templateIds": "[\"1404\"]"
    },
    _0x5c257b = new Date().getTime(),
    _0x497ff3 = 12574478;
  var _0x2cd38e = "data=" + encodeURIComponent(JSON.stringify(_0x30f5b8));
  const _0x1a6dac = _0x4dd051(_0x29f701),
    _0x12ff73 = _0x1a6dac.split("_")[0],
    _0x3ad967 = await _0x39595a(_0x12ff73 + "&" + _0x5c257b + "&" + _0x497ff3 + "&" + JSON.stringify(_0x30f5b8), _0x1936bc),
    _0x4a8f8c = {
      "url": "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.queryintegralproperty.v2/1.0/5.0/?jsv=2.7.2&appKey=12574478&t=" + _0x5c257b + "&sign=" + _0x3ad967 + "&api=mtop.koubei.interaction.center.common.queryintegralproperty.v2&v=1.0",
      "method": "POST",
      "headers": _0x2be38f,
      "body": _0x2cd38e
    };
  return _0x516b79(_0x350a36 => {
    _0x423c19(_0x4a8f8c, async (_0x16eadd, _0x184317, _0x5170fe) => {
      if (!_0x16eadd && _0x184317.statusCode === 200) {
        try {
          const _0xb4ed2a = JSON.parse(_0x5170fe);
          if (_0xb4ed2a.data && _0xb4ed2a.data.data) {
            const _0x34245e = _0xb4ed2a.data.data["1404"]?.["count"] || 0;
            _0x350a36(_0x34245e);
          } else _0x350a36(0);
        } catch (_0x2db70d) {
          console.log("Error parsing response:", _0x5170fe);
          _0x350a36(0);
        }
      } else _0x350a36(0);
    });
  });
}
async function _0x4b9752(_0x4e7361, _0x56ca1a) {
  const _0x421a22 = _0x48fffb(_0x4e7361);
  !_0x421a22.has("wxUid") ? console.log("没有获取到推送 uid，不推送消息\n") : await _0xc3c3b("饿了么资产推送", _0x56ca1a, {
    "uid": _0x421a22.get("wxUid")
  });
}
async function _0x210d6f() {
  await _0x235be7(_0x1936bc, 1);
  for (let _0x154f31 = 0; _0x154f31 < _0x391178.length; _0x154f31++) {
    let _0x404896 = _0x391178[_0x154f31];
    _0x404896 = await _0x1df37a(_0x404896);
    if (!_0x404896) {
      continue;
    }
    let _0x2784cb = await _0x3fb4c6(_0x404896);
    if (!_0x2784cb.username) {
      console.log("第", _0x154f31 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    const _0x2a02a0 = _0x2784cb.user_id;
    await _0x41e3dd(_0x1936bc, _0x2a02a0, _0x468b68);
    console.log("******开始【饿了么账号", _0x154f31 + 1, "】", _0x2784cb.username, "*********");
    let _0x2c8f72 = await _0xd0707b(_0x404896);
    if (_0x2c8f72 == null) {
      _0x2c8f72 = _0x1fe53a;
    } else _0x2c8f72 = _0x2c8f72 / 100;
    let _0x107327 = await _0x78ca4c(_0x404896);
    !_0x107327 && (_0x107327 = _0x1fe53a);
    let _0x40dfcd = await _0x3a0e41(_0x404896, 1);
    await _0x41bea2(1);
    let _0x586675 = await _0x3a0e41(_0x404896, 2);
    await _0x41bea2(1);
    let _0x345fc1 = await _0x3a0e41(_0x404896, 3);
    await _0x41bea2(1);
    let _0x2f4e07 = await _0x3a0e41(_0x404896, 4);
    await _0x41bea2(1);
    let _0x8315d5 = await _0x3a0e41(_0x404896, 5),
      _0x5ae0a8 = _0x40dfcd + _0x586675 + _0x345fc1 + _0x2f4e07 + _0x8315d5;
    !_0x5ae0a8 && (_0x5ae0a8 = _0x1fe53a);
    var _0x3c890a = await _0x589ae9(_0x404896);
    !_0x3c890a && (_0x3c890a = _0x1fe53a);
    let _0x440789 = _0x2784cb.mobile.substring(0, 3) + "****" + _0x2784cb.mobile.substring(7);
    console.log("手机号：" + _0x440789);
    console.log("今日共获得乐园币：" + _0x5ae0a8);
    console.log("账户总乐园币：" + _0x3c890a);
    console.log("总吃货豆：" + _0x107327);
    console.log("余额：" + _0x2c8f72);
    var _0x4b03f9 = "###资产推送\n" + _0x550e4d + "|" + _0x2784cb.username + "|" + _0x5ae0a8 + "/" + _0x3c890a + "|" + _0x107327 + "|" + _0x2c8f72 + "|";
    await _0x4b9752(_0x404896, _0x4b03f9);
    await _0x41bea2(10);
  }
  process.exit(0);
}
_0x210d6f();
function _0x38a12(_0x5383b8, _0xd40b2e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x14f4fd {
    constructor(_0x5e543a) {
      this.env = _0x5e543a;
    }
    ["send"](_0x400aba, _0x518f20 = "GET") {
      _0x400aba = "string" == typeof _0x400aba ? {
        "url": _0x400aba
      } : _0x400aba;
      let _0x30686c = this.get;
      return "POST" === _0x518f20 && (_0x30686c = this.post), new Promise((_0x2d38ac, _0x2b36fe) => {
        _0x30686c.call(this, _0x400aba, (_0x3b07fd, _0x83645f, _0x5e48c6) => {
          _0x3b07fd ? _0x2b36fe(_0x3b07fd) : _0x2d38ac(_0x83645f);
        });
      });
    }
    ["get"](_0x4f5907) {
      return this.send.call(this.env, _0x4f5907);
    }
    ["post"](_0x407963) {
      return this.send.call(this.env, _0x407963, "POST");
    }
  }
  return new class {
    constructor(_0x31e559, _0x242ac3) {
      this.name = _0x31e559;
      this.http = new _0x14f4fd(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x242ac3);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x5d7fe8, _0x8133ae = null) {
      try {
        return JSON.parse(_0x5d7fe8);
      } catch {
        return _0x8133ae;
      }
    }
    ["toStr"](_0x30faf9, _0x531dc1 = null) {
      try {
        return JSON.stringify(_0x30faf9);
      } catch {
        return _0x531dc1;
      }
    }
    ["getjson"](_0x555dbc, _0x2fb9dc) {
      let _0x9413b0 = _0x2fb9dc;
      const _0x48b6ed = this.getdata(_0x555dbc);
      if (_0x48b6ed) try {
        _0x9413b0 = JSON.parse(this.getdata(_0x555dbc));
      } catch {}
      return _0x9413b0;
    }
    ["setjson"](_0x1c7439, _0x2db8b0) {
      try {
        return this.setdata(JSON.stringify(_0x1c7439), _0x2db8b0);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x361828) {
      return new Promise(_0x3c5dab => {
        this.get({
          "url": _0x361828
        }, (_0x506e52, _0x174a4f, _0x306738) => _0x3c5dab(_0x306738));
      });
    }
    ["runScript"](_0x28bf86, _0xe33250) {
      return new Promise(_0x4ec401 => {
        let _0x15bfb9 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x15bfb9 = _0x15bfb9 ? _0x15bfb9.replace(/\n/g, "").trim() : _0x15bfb9;
        let _0x3d0192 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3d0192 = _0x3d0192 ? 1 * _0x3d0192 : 20;
        _0x3d0192 = _0xe33250 && _0xe33250.timeout ? _0xe33250.timeout : _0x3d0192;
        const [_0x58bb7f, _0x19fe04] = _0x15bfb9.split("@"),
          _0x4102a3 = {
            "url": "http://" + _0x19fe04 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x28bf86,
              "mock_type": "cron",
              "timeout": _0x3d0192
            },
            "headers": {
              "X-Key": _0x58bb7f,
              "Accept": "*/*"
            }
          };
        this.post(_0x4102a3, (_0x593669, _0x6b5db6, _0x31f6ff) => _0x4ec401(_0x31f6ff));
      }).catch(_0x4bc763 => this.logErr(_0x4bc763));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x313b40 = this.path.resolve(this.dataFile),
          _0x3af85f = this.path.resolve(process.cwd(), this.dataFile),
          _0x39681d = this.fs.existsSync(_0x313b40),
          _0x57a1d5 = !_0x39681d && this.fs.existsSync(_0x3af85f);
        if (!_0x39681d && !_0x57a1d5) return {};
        {
          const _0x56ba54 = _0x39681d ? _0x313b40 : _0x3af85f;
          try {
            return JSON.parse(this.fs.readFileSync(_0x56ba54));
          } catch (_0x19e70d) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x20e1ae = this.path.resolve(this.dataFile),
          _0x182f65 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4014aa = this.fs.existsSync(_0x20e1ae),
          _0x2e73c7 = !_0x4014aa && this.fs.existsSync(_0x182f65),
          _0x5ebe83 = JSON.stringify(this.data);
        _0x4014aa ? this.fs.writeFileSync(_0x20e1ae, _0x5ebe83) : _0x2e73c7 ? this.fs.writeFileSync(_0x182f65, _0x5ebe83) : this.fs.writeFileSync(_0x20e1ae, _0x5ebe83);
      }
    }
    ["lodash_get"](_0x5bba42, _0x5a5848, _0x1eeecd) {
      const _0xb7d467 = _0x5a5848.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3439f6 = _0x5bba42;
      for (const _0x1d05ab of _0xb7d467) if (_0x3439f6 = Object(_0x3439f6)[_0x1d05ab], void 0 === _0x3439f6) return _0x1eeecd;
      return _0x3439f6;
    }
    ["lodash_set"](_0x451b14, _0x330f52, _0xd9ebb6) {
      return Object(_0x451b14) !== _0x451b14 ? _0x451b14 : (Array.isArray(_0x330f52) || (_0x330f52 = _0x330f52.toString().match(/[^.[\]]+/g) || []), _0x330f52.slice(0, -1).reduce((_0x5c5714, _0x15b345, _0x43a04e) => Object(_0x5c5714[_0x15b345]) === _0x5c5714[_0x15b345] ? _0x5c5714[_0x15b345] : _0x5c5714[_0x15b345] = Math.abs(_0x330f52[_0x43a04e + 1]) >> 0 == +_0x330f52[_0x43a04e + 1] ? [] : {}, _0x451b14)[_0x330f52[_0x330f52.length - 1]] = _0xd9ebb6, _0x451b14);
    }
    ["getdata"](_0x59593c) {
      let _0x1653e2 = this.getval(_0x59593c);
      if (/^@/.test(_0x59593c)) {
        const [, _0x5f4a77, _0x30a063] = /^@(.*?)\.(.*?)$/.exec(_0x59593c),
          _0x31b0ca = _0x5f4a77 ? this.getval(_0x5f4a77) : "";
        if (_0x31b0ca) {
          try {
            const _0x5cb1c2 = JSON.parse(_0x31b0ca);
            _0x1653e2 = _0x5cb1c2 ? this.lodash_get(_0x5cb1c2, _0x30a063, "") : _0x1653e2;
          } catch (_0x5b2735) {
            _0x1653e2 = "";
          }
        }
      }
      return _0x1653e2;
    }
    ["setdata"](_0x2d0eca, _0x106607) {
      let _0x5dfd26 = false;
      if (/^@/.test(_0x106607)) {
        const [, _0x52a76c, _0x2399f8] = /^@(.*?)\.(.*?)$/.exec(_0x106607),
          _0x345032 = this.getval(_0x52a76c),
          _0x3e46d8 = _0x52a76c ? "null" === _0x345032 ? null : _0x345032 || "{}" : "{}";
        try {
          const _0x1a92a8 = JSON.parse(_0x3e46d8);
          this.lodash_set(_0x1a92a8, _0x2399f8, _0x2d0eca);
          _0x5dfd26 = this.setval(JSON.stringify(_0x1a92a8), _0x52a76c);
        } catch (_0x5e8cf1) {
          const _0x5c2a5d = {};
          this.lodash_set(_0x5c2a5d, _0x2399f8, _0x2d0eca);
          _0x5dfd26 = this.setval(JSON.stringify(_0x5c2a5d), _0x52a76c);
        }
      } else _0x5dfd26 = this.setval(_0x2d0eca, _0x106607);
      return _0x5dfd26;
    }
    ["getval"](_0x134b14) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x134b14) : this.isQuanX() ? $prefs.valueForKey(_0x134b14) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x134b14]) : this.data && this.data[_0x134b14] || null;
    }
    ["setval"](_0x3ab0d9, _0x7d6f9) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3ab0d9, _0x7d6f9) : this.isQuanX() ? $prefs.setValueForKey(_0x3ab0d9, _0x7d6f9) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x7d6f9] = _0x3ab0d9, this.writedata(), !0) : this.data && this.data[_0x7d6f9] || null;
    }
    ["initGotEnv"](_0x1810c3) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1810c3 && (_0x1810c3.headers = _0x1810c3.headers ? _0x1810c3.headers : {}, void 0 === _0x1810c3.headers.Cookie && void 0 === _0x1810c3.cookieJar && (_0x1810c3.cookieJar = this.ckjar));
    }
    ["get"](_0x2f89b0, _0x2f700c = () => {}) {
      _0x2f89b0.headers && (delete _0x2f89b0.headers["Content-Type"], delete _0x2f89b0.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2f89b0.headers = _0x2f89b0.headers || {}, Object.assign(_0x2f89b0.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x2f89b0, (_0x4a0a0c, _0x262745, _0x1209b0) => {
        !_0x4a0a0c && _0x262745 && (_0x262745.body = _0x1209b0, _0x262745.statusCode = _0x262745.status);
        _0x2f700c(_0x4a0a0c, _0x262745, _0x1209b0);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2f89b0.opts = _0x2f89b0.opts || {}, Object.assign(_0x2f89b0.opts, {
        "hints": !1
      })), $task.fetch(_0x2f89b0).then(_0x4828e8 => {
        const {
          statusCode: _0x481d93,
          statusCode: _0x5caec2,
          headers: _0x4066a6,
          body: _0x236c51
        } = _0x4828e8;
        _0x2f700c(null, {
          "status": _0x481d93,
          "statusCode": _0x5caec2,
          "headers": _0x4066a6,
          "body": _0x236c51
        }, _0x236c51);
      }, _0x1c3498 => _0x2f700c(_0x1c3498))) : this.isNode() && (this.initGotEnv(_0x2f89b0), this.got(_0x2f89b0).on("redirect", (_0x5cf5f8, _0x2fd424) => {
        try {
          if (_0x5cf5f8.headers["set-cookie"]) {
            const _0x2ed79c = _0x5cf5f8.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x2ed79c && this.ckjar.setCookieSync(_0x2ed79c, null);
            _0x2fd424.cookieJar = this.ckjar;
          }
        } catch (_0x1eda45) {
          this.logErr(_0x1eda45);
        }
      }).then(_0x494648 => {
        const {
          statusCode: _0x133f4b,
          statusCode: _0x3c1bc3,
          headers: _0x4208b5,
          body: _0x272c9c
        } = _0x494648;
        _0x2f700c(null, {
          "status": _0x133f4b,
          "statusCode": _0x3c1bc3,
          "headers": _0x4208b5,
          "body": _0x272c9c
        }, _0x272c9c);
      }, _0x24f5c2 => {
        const {
          message: _0x55446d,
          response: _0x322fe7
        } = _0x24f5c2;
        _0x2f700c(_0x55446d, _0x322fe7, _0x322fe7 && _0x322fe7.body);
      }));
    }
    ["post"](_0x3aba31, _0xfd2d87 = () => {}) {
      if (_0x3aba31.body && _0x3aba31.headers && !_0x3aba31.headers["Content-Type"] && (_0x3aba31.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x3aba31.headers && delete _0x3aba31.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x3aba31.headers = _0x3aba31.headers || {}, Object.assign(_0x3aba31.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x3aba31, (_0x3eaa5b, _0x32e4e4, _0x283526) => {
        !_0x3eaa5b && _0x32e4e4 && (_0x32e4e4.body = _0x283526, _0x32e4e4.statusCode = _0x32e4e4.status);
        _0xfd2d87(_0x3eaa5b, _0x32e4e4, _0x283526);
      });else {
        if (this.isQuanX()) _0x3aba31.method = "POST", this.isNeedRewrite && (_0x3aba31.opts = _0x3aba31.opts || {}, Object.assign(_0x3aba31.opts, {
          "hints": !1
        })), $task.fetch(_0x3aba31).then(_0x599630 => {
          const {
            statusCode: _0x5cf3ec,
            statusCode: _0x52b1ee,
            headers: _0x37eb01,
            body: _0x3ea262
          } = _0x599630;
          _0xfd2d87(null, {
            "status": _0x5cf3ec,
            "statusCode": _0x52b1ee,
            "headers": _0x37eb01,
            "body": _0x3ea262
          }, _0x3ea262);
        }, _0x194bb4 => _0xfd2d87(_0x194bb4));else {
          if (this.isNode()) {
            this.initGotEnv(_0x3aba31);
            const {
              url: _0x430a73,
              ..._0x27d7b8
            } = _0x3aba31;
            this.got.post(_0x430a73, _0x27d7b8).then(_0x468a19 => {
              const {
                statusCode: _0x5e30c1,
                statusCode: _0x43a62c,
                headers: _0x486987,
                body: _0xe1c91
              } = _0x468a19;
              _0xfd2d87(null, {
                "status": _0x5e30c1,
                "statusCode": _0x43a62c,
                "headers": _0x486987,
                "body": _0xe1c91
              }, _0xe1c91);
            }, _0x534aef => {
              const {
                message: _0x420a35,
                response: _0x392535
              } = _0x534aef;
              _0xfd2d87(_0x420a35, _0x392535, _0x392535 && _0x392535.body);
            });
          }
        }
      }
    }
    ["time"](_0x2a354f, _0x1ee573 = null) {
      const _0x1fba50 = _0x1ee573 ? new Date(_0x1ee573) : new Date();
      let _0x4c7430 = {
        "M+": _0x1fba50.getMonth() + 1,
        "d+": _0x1fba50.getDate(),
        "H+": _0x1fba50.getHours(),
        "m+": _0x1fba50.getMinutes(),
        "s+": _0x1fba50.getSeconds(),
        "q+": Math.floor((_0x1fba50.getMonth() + 3) / 3),
        "S": _0x1fba50.getMilliseconds()
      };
      /(y+)/.test(_0x2a354f) && (_0x2a354f = _0x2a354f.replace(RegExp.$1, (_0x1fba50.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x35142d in _0x4c7430) new RegExp("(" + _0x35142d + ")").test(_0x2a354f) && (_0x2a354f = _0x2a354f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4c7430[_0x35142d] : ("00" + _0x4c7430[_0x35142d]).substr(("" + _0x4c7430[_0x35142d]).length)));
      return _0x2a354f;
    }
    ["msg"](_0x2985e7 = _0x5383b8, _0x3839b7 = "", _0x49a101 = "", _0x6d3fd1) {
      const _0x4e6ec6 = _0x4c55b4 => {
        if (!_0x4c55b4) return _0x4c55b4;
        if ("string" == typeof _0x4c55b4) return this.isLoon() ? _0x4c55b4 : this.isQuanX() ? {
          "open-url": _0x4c55b4
        } : this.isSurge() ? {
          "url": _0x4c55b4
        } : void 0;
        if ("object" == typeof _0x4c55b4) {
          if (this.isLoon()) {
            let _0x3af23c = _0x4c55b4.openUrl || _0x4c55b4.url || _0x4c55b4["open-url"],
              _0x261585 = _0x4c55b4.mediaUrl || _0x4c55b4["media-url"];
            return {
              "openUrl": _0x3af23c,
              "mediaUrl": _0x261585
            };
          }
          if (this.isQuanX()) {
            let _0x4bf39a = _0x4c55b4["open-url"] || _0x4c55b4.url || _0x4c55b4.openUrl,
              _0x550c0d = _0x4c55b4["media-url"] || _0x4c55b4.mediaUrl;
            return {
              "open-url": _0x4bf39a,
              "media-url": _0x550c0d
            };
          }
          if (this.isSurge()) {
            let _0x30e096 = _0x4c55b4.url || _0x4c55b4.openUrl || _0x4c55b4["open-url"];
            return {
              "url": _0x30e096
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x2985e7, _0x3839b7, _0x49a101, _0x4e6ec6(_0x6d3fd1)) : this.isQuanX() && $notify(_0x2985e7, _0x3839b7, _0x49a101, _0x4e6ec6(_0x6d3fd1))), !this.isMuteLog) {
        let _0x14857d = ["", "==============📣系统通知📣=============="];
        _0x14857d.push(_0x2985e7);
        _0x3839b7 && _0x14857d.push(_0x3839b7);
        _0x49a101 && _0x14857d.push(_0x49a101);
        console.log(_0x14857d.join("\n"));
        this.logs = this.logs.concat(_0x14857d);
      }
    }
    ["log"](..._0x4b5909) {
      _0x4b5909.length > 0 && (this.logs = [...this.logs, ..._0x4b5909]);
      console.log(_0x4b5909.join(this.logSeparator));
    }
    ["logErr"](_0x369aec, _0x31195a) {
      const _0x43e616 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x43e616 ? this.log("", "❗️" + this.name + ", 错误!", _0x369aec.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x369aec);
    }
    ["wait"](_0x136cb0) {
      return new Promise(_0x4d1d26 => setTimeout(_0x4d1d26, _0x136cb0));
    }
    ["done"](_0x4623bc = {}) {
      const _0x3d15c4 = new Date().getTime(),
        _0x189d5a = (_0x3d15c4 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x189d5a + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4623bc);
    }
  }(_0x5383b8, _0xd40b2e);
}