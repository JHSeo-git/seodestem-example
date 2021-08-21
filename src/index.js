"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var core_1 = require("@seodestem/core");
var token = process.env.FIGMA_API_KEY;
var fileKey = "eKlOIJ2KZu3yv703EaUJPt";
var kit = new core_1.SeoDestemKit(token);
kit
    .request("GET /v1/files/:key", {
    key: fileKey,
})
    .then(function (response) {
    console.log(__assign({}, response));
});
