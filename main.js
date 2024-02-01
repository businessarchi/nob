"use strict";
/*
    Originally created by EasyChris (2022)
    Modified by Quan Phan (2023)

    This file is part of Nobsidion and is licensed under the GNU General Public License v3.0.
    Modifications include <brief description of modifications>.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var obsidian_1 = require("obsidian");
var yamlFrontMatter = require("yaml-front-matter");
var yaml = require("yaml");
var notion_1 = require("lib/notion");
var messenger_1 = require("lib/messenger");
var settings_1 = require("lib/settings");
// Define your default settings
var DEFAULT_SETTINGS = {
    notionAPIToken: "",
    databaseID: "",
    bannerUrl: "",
    notionWorkspaceID: "",
    allowTags: false,
};
// Get language configuration for notices
var langConfig = (0, messenger_1.NoticeMConfig)(window.localStorage.getItem("language") || "en");
var ObsidianSyncNotionPlugin = /** @class */ (function (_super) {
    __extends(ObsidianSyncNotionPlugin, _super);
    function ObsidianSyncNotionPlugin(app, manifest) {
        var _this = _super.call(this, app, manifest) || this;
        _this.settings = DEFAULT_SETTINGS;
        _this.notion = new notion_1.Notion(_this.settings);
        return _this;
    }
    ObsidianSyncNotionPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{},
                            DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        this.notion = new notion_1.Notion(this.settings);
                        this.addCommand({
                            id: "share-to-notion",
                            name: "Upload current note to Notion",
                            editorCallback: function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.uploadCurrentNote();
                                    return [2 /*return*/];
                                });
                            }); },
                        });
                        this.addCommand({
                            id: "bulk-share-to-notion",
                            name: "Upload entire vault to Notion",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.bulkUpload();
                                    return [2 /*return*/];
                                });
                            }); },
                        });
                        // Add settings tab to plugin
                        this.addSettingTab(new settings_1.SampleSettingTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.onunload = function () { };
    ObsidianSyncNotionPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.uploadCurrentNote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nowFile;
            return __generator(this, function (_a) {
                if (!this.hasValidNotionCredentials()) {
                    new obsidian_1.Notice("Please set up the Notion API and database ID in the settings tab.");
                    return [2 /*return*/];
                }
                nowFile = this.app.workspace.getActiveFile();
                if (!nowFile) {
                    new obsidian_1.Notice(langConfig["open-file"]);
                    return [2 /*return*/, null];
                }
                this.uploadFile(nowFile);
                return [2 /*return*/];
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.bulkUpload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var markdownFiles, _i, markdownFiles_1, file;
            return __generator(this, function (_a) {
                if (!this.hasValidNotionCredentials()) {
                    new obsidian_1.Notice("Please set up the Notion API token and database ID in the settings tab.");
                    return [2 /*return*/];
                }
                markdownFiles = this.app.vault.getMarkdownFiles();
                for (_i = 0, markdownFiles_1 = markdownFiles; _i < markdownFiles_1.length; _i++) {
                    file = markdownFiles_1[_i];
                    this.uploadFile(file);
                }
                new obsidian_1.Notice("All files have been processed for upload to Notion.");
                return [2 /*return*/];
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.hasValidNotionCredentials = function () {
        var _a = this.settings, notionAPIToken = _a.notionAPIToken, databaseID = _a.databaseID;
        return notionAPIToken !== "" && databaseID !== "";
    };
    ObsidianSyncNotionPlugin.prototype.uploadFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var contentWithFrontMatter, tags, notionPageId, content, uploadResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContent(file)];
                    case 1:
                        contentWithFrontMatter = _a.sent();
                        tags = [];
                        if (this.settings.allowTags)
                            tags = contentWithFrontMatter.tags;
                        if (!!contentWithFrontMatter.notionPageId) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createEmptyNotionPage(file, contentWithFrontMatter, tags)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.getContent(file)];
                    case 4:
                        contentWithFrontMatter = _a.sent();
                        notionPageId = contentWithFrontMatter.notionPageId;
                        return [4 /*yield*/, this.convertObsidianLinks(contentWithFrontMatter.__content)];
                    case 5:
                        content = _a.sent();
                        return [4 /*yield*/, this.notion.clearPageContent(notionPageId)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.notion.addContentToPage(notionPageId, content)];
                    case 7:
                        uploadResult = _a.sent();
                        this.displayUploadResult(uploadResult, file.basename);
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.getContent = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var content, contentWithFrontMatter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.read(file)];
                    case 1:
                        content = _a.sent();
                        contentWithFrontMatter = yamlFrontMatter.loadFront(content);
                        return [2 /*return*/, contentWithFrontMatter];
                }
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.createEmptyNotionPage = function (file, contentWithFrontMatter, tags) {
        if (tags === void 0) { tags = []; }
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, notionPageUrl, notionPageId, notionWorkspaceID, mainContent, frontMatter, yamlhead, __content_remove_n, processedMarkdown, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.notion.createEmptyPage(file.basename, tags)];
                    case 1:
                        res = _b.sent();
                        _a = res.json, notionPageUrl = _a.url, notionPageId = _a.id;
                        notionWorkspaceID = this.settings.notionWorkspaceID;
                        contentWithFrontMatter.notionPageUrl = notionPageUrl;
                        if (notionWorkspaceID !== "") {
                            contentWithFrontMatter.notionPageUrl = notionPageUrl.replace("www.notion.so", "".concat(notionWorkspaceID, ".notion.site"));
                        }
                        contentWithFrontMatter.notionPageId = notionPageId;
                        mainContent = contentWithFrontMatter.__content, frontMatter = __rest(contentWithFrontMatter, ["__content"]);
                        yamlhead = yaml.stringify(frontMatter).replace(/\n$/, "");
                        __content_remove_n = mainContent.replace(/^\n/, "");
                        processedMarkdown = "---\n".concat(yamlhead, "\n---\n").concat(__content_remove_n);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, file.vault.modify(file, processedMarkdown)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        new obsidian_1.Notice("write file error ".concat(error_1));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.createEmptyMarkdownFile = function (pageName) {
        return __awaiter(this, void 0, void 0, function () {
            var newFilePath, newFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newFilePath = "/".concat(pageName, ".md");
                        return [4 /*yield*/, this.app.vault.create(newFilePath, "")];
                    case 1:
                        newFile = _a.sent();
                        return [2 /*return*/, newFile];
                }
            });
        });
    };
    /**
     * Convert Obsidian wiki-link into hyperlink.
     *
     * The hyperlink will have the same name as the wiki-link, but it will link
     * to the corresponding Notion page.
     *
     * We parse wiki-link into hyperlink because Notion doesn't understand wiki-link
     * and we haven't built a parser from wiki-link to Notion internal page mention.
     *
     * @param markdown Original markdown content of an Obsidian markdown file
     * @returns Same markdown content, with wiki-link turned into hyperlink.
     */
    ObsidianSyncNotionPlugin.prototype.convertObsidianLinks = function (markdown) {
        return __awaiter(this, void 0, void 0, function () {
            var obsidianLinkRegex, updatedMarkdown, markdownFiles, links, match, _loop_1, this_1, _i, links_1, pageName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obsidianLinkRegex = /\[\[([^\]]+)\]\]/g;
                        updatedMarkdown = markdown;
                        markdownFiles = this.app.vault.getMarkdownFiles();
                        links = new Set();
                        while ((match = obsidianLinkRegex.exec(markdown)) !== null) {
                            links.add(match[1]);
                        }
                        _loop_1 = function (pageName) {
                            var file, contentWithFrontMatter, notionPageUrl;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        file = markdownFiles.find(function (f) { return f.basename === pageName; });
                                        if (!!file) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_1.createEmptyMarkdownFile(pageName)];
                                    case 1:
                                        file = _b.sent();
                                        _b.label = 2;
                                    case 2:
                                        if (!file) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.getContent(file)];
                                    case 3:
                                        contentWithFrontMatter = _b.sent();
                                        if (!!contentWithFrontMatter.notionPageUrl) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this_1.createEmptyNotionPage(file, contentWithFrontMatter)];
                                    case 4:
                                        _b.sent();
                                        _b.label = 5;
                                    case 5: return [4 /*yield*/, this_1.getContent(file)];
                                    case 6:
                                        contentWithFrontMatter = _b.sent();
                                        notionPageUrl = contentWithFrontMatter.notionPageUrl;
                                        updatedMarkdown = updatedMarkdown.replace(new RegExp("\\[\\[".concat(pageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "\\]\\]"), "g"), "[".concat(pageName, "](").concat(notionPageUrl, ")"));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, links_1 = links;
                        _a.label = 1;
                    case 1:
                        if (!(_i < links_1.length)) return [3 /*break*/, 4];
                        pageName = links_1[_i];
                        return [5 /*yield**/, _loop_1(pageName)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, updatedMarkdown];
                }
            });
        });
    };
    ObsidianSyncNotionPlugin.prototype.displayUploadResult = function (uploadResult, fileName) {
        if (uploadResult && uploadResult.status === 200) {
            new obsidian_1.Notice("".concat(langConfig["sync-success"]).concat(fileName));
        }
        else {
            var errorMessage = (uploadResult === null || uploadResult === void 0 ? void 0 : uploadResult.text) || langConfig["sync-fail"];
            new obsidian_1.Notice("".concat(errorMessage).concat(fileName), 5000);
        }
    };
    return ObsidianSyncNotionPlugin;
}(obsidian_1.Plugin));
exports.default = ObsidianSyncNotionPlugin;
