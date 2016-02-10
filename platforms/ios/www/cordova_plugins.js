cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.pengyanb.vlcstreamplayer/www/PybVlcStreamPlayer.js",
        "id": "com.pengyanb.vlcstreamplayer.PybVlcStreamPlayer",
        "clobbers": [
            "PYB.vlcStreamPlayer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.pengyanb.vlcstreamplayer": "1.0.1"
}
// BOTTOM OF METADATA
});