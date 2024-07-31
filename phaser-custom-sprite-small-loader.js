require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

var Phaser = {
    Actions: {
        GridAlign: require('actions/GridAlign'),
    },
    Animations: require('animations'),
    BlendModes: require('renderer/BlendModes'),
    Cache: require('cache'),
    Cameras: { Scene2D: require('cameras/2d') },
    Core: require('core'),
    Class: require('utils/Class'),
    Data: require('data'),
    Display: { Masks: require('display/mask') },
    DOM: require('dom'),
    Events: require('events'),
    FX: require('fx'),
    Game: require('core/Game'),
    GameObjects: {
        DisplayList: require('gameobjects/DisplayList'),
        GameObjectCreator: require('gameobjects/GameObjectCreator'),
        GameObjectFactory: require('gameobjects/GameObjectFactory'),
        UpdateList: require('gameobjects/UpdateList'),
        // Components: require('gameobjects/components'),
        BuildGameObject: require('gameobjects/BuildGameObject'),
        BuildGameObjectAnimation: require('gameobjects/BuildGameObjectAnimation'),
        GameObject: require('gameobjects/GameObject'),
        Graphics: require('gameobjects/graphics/Graphics'),
        Image: require('gameobjects/image/Image'),
        Video: require('gameobjects/video/Video'),
        Layer: require('gameobjects/layer/Layer'),
        Sprite: require('gameobjects/sprite/Sprite'),
        Text: require('gameobjects/text/Text'),
        Group: require('gameobjects/group/Group'),
        Rectangle: require('gameobjects/shape/rectangle/Rectangle'),
        Line: require('gameobjects/shape/line/Line'),
        Factories: {
            Graphics: require('gameobjects/graphics/GraphicsFactory'),
            Image: require('gameobjects/image/ImageFactory'),
            Video: require('gameobjects/video/VideoFactory'),
            Layer: require('gameobjects/layer/LayerFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            Text: require('gameobjects/text/TextFactory'),
            Group: require('gameobjects/group/GroupFactory'),
            Rectangle: require('gameobjects/shape/rectangle/RectangleFactory'),
            Line: require('gameobjects/shape/line/LineFactory')
        },
        Creators: {
            Graphics: require('gameobjects/graphics/GraphicsCreator'),
            Image: require('gameobjects/image/ImageCreator'),
            Video: require('gameobjects/video/VideoCreator'),
            Layer: require('gameobjects/layer/LayerCreator'),
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            Text: require('gameobjects/text/TextCreator'),
            Group: require('gameobjects/group/GroupCreator'),
        }
    },
    Geom: {
        Rectangle: require('geom/rectangle'),
    },
    Input: {
        CreatePixelPerfectHandler: require('input/CreatePixelPerfectHandler'),
        CreateInteractiveObject: require('input/CreateInteractiveObject'),
        InputManager: require('input/InputManager'),
        InputPlugin: require('input/InputPlugin'),
        InputPluginCache: require('input/InputPluginCache'),
        Mouse: require('input/mouse'),
        Pointer: require('input/Pointer'),
        Touch: require('input/touch')
    },
    Loader: {
        FileTypes: {
            // AnimationJSONFile: require('loader/filetypes/AnimationJSONFile'),
            // AtlasJSONFile: require('loader/filetypes/AtlasJSONFile'),
            // AudioFile: require('loader/filetypes/AudioFile'),
            // AudioSpriteFile: require('loader/filetypes/AudioSpriteFile'),
            // HTML5AudioFile: require('loader/filetypes/HTML5AudioFile'),
            ImageFile: require('loader/filetypes/ImageFile'),
            VideoFile: require('loader/filetypes/VideoFile'),
            SVGFile: require('loader/filetypes/SVGFile'),
            // JSONFile: require('loader/filetypes/JSONFile'),
            // MultiAtlasFile: require('loader/filetypes/MultiAtlasFile'),
            // PluginFile: require('loader/filetypes/PluginFile'),
            // ScriptFile: require('loader/filetypes/ScriptFile'),
            SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
            // TextFile: require('loader/filetypes/TextFile'),
            // XMLFile: require('loader/filetypes/XMLFile')
        },
        File: require('loader/File'),
        FileTypesManager: require('loader/FileTypesManager'),
        GetURL: require('loader/GetURL'),
        LoaderPlugin: require('loader/LoaderPlugin'),
        // MergeXHRSettings: require('loader/MergeXHRSettings'),
        // MultiFile: require('loader/MultiFile'),
        // XHRLoader: require('loader/XHRLoader'),
        // XHRSettings: require('loader/XHRSettings')
    },
    Math: require('math'),
    Plugins: require('plugins'),
    Renderer: require('renderer'),
    Scale: require('scale'),
    ScaleModes: require('renderer/ScaleModes'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Structs: require('structs'),
    Textures: require('textures'),
    Time: require('time'),
    Tweens: require('tweens'),
    Utils: require('utils')
};

//  Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
