gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1= [];
gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDkamaradObjects1= [];
gdjs.Untitled_32sceneCode.GDkamaradObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite6Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite6Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite7Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite7Objects2= [];
gdjs.Untitled_32sceneCode.GDzacatekObjects1= [];
gdjs.Untitled_32sceneCode.GDzacatekObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hrac_smajlik"), gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1[i].getBehavior("PlatformerObject").getAcceleration() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1[k] = gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1[i].setPosition(0,0);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDhrac_9595smajlikObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDkamaradObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDkamaradObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDzacatekObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDzacatekObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
