var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
// Initialize and add the map
(function (g) { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = function () { return h || (h = new Promise(function (f, n) { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
    switch (_b.label) {
        case 0: return [4 /*yield*/, (a = m.createElement("script"))];
        case 1:
            _b.sent();
            e.set("libraries", __spreadArray([], r, true) + "");
            for (k in g)
                e.set(k.replace(/[A-Z]/g, function (t) { return "_" + t[0].toLowerCase(); }), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = "https://maps.".concat(c, "apis.com/maps/api/js?") + e;
            d[q] = f;
            a.onerror = function () { return h = n(Error(p + " could not load.")); };
            a.nonce = ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
            m.head.append(a);
            return [2 /*return*/];
    }
}); }); })); }; d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = function (f) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    return r.add(f) && u().then(function () { return d[l].apply(d, __spreadArray([f], n, false)); });
}; })({ key: "AIzaSyBCI9_XT99gdSDgCctcuPFJKCBLi8EPdMM", v: "beta" });
// Initialize and add the map
var map;
function initMap() {
    return __awaiter(this, void 0, void 0, function () {
        var position, Map, AdvancedMarkerView, marker;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    position = { lat: 28.482921928694683, lng: -16.322237460149434 };
                    return [4 /*yield*/, google.maps.importLibrary("maps")];
                case 1:
                    Map = (_a.sent()).Map;
                    return [4 /*yield*/, google.maps.importLibrary("marker")];
                case 2:
                    AdvancedMarkerView = (_a.sent()).AdvancedMarkerView;
                    // The map, centered at Uluru
                    map = new Map(document.getElementById('map'), {
                        zoom: 17,
                        center: position,
                        mapId: 'DEMO_MAP_ID',
                    });
                    marker = new AdvancedMarkerView({
                        map: map,
                        position: position,
                        title: 'Uluru'
                    });
                    return [2 /*return*/];
            }
        });
    });
}
initMap();
