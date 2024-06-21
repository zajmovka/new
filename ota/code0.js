gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDninjaObjects1= [];
gdjs.Untitled_32sceneCode.GDninjaObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2= [];
gdjs.Untitled_32sceneCode.GDminecraftObjects1= [];
gdjs.Untitled_32sceneCode.GDminecraftObjects2= [];
gdjs.Untitled_32sceneCode.GDvoidObjects1= [];
gdjs.Untitled_32sceneCode.GDvoidObjects2= [];
gdjs.Untitled_32sceneCode.GDdve_95345e_95951_9595Objects1= [];
gdjs.Untitled_32sceneCode.GDdve_95345e_95951_9595Objects2= [];
gdjs.Untitled_32sceneCode.GDdvereObjects1= [];
gdjs.Untitled_32sceneCode.GDdvereObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDninjaObjects1Objects = Hashtable.newFrom({"ninja": gdjs.Untitled_32sceneCode.GDninjaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDvoidObjects1Objects = Hashtable.newFrom({"void": gdjs.Untitled_32sceneCode.GDvoidObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDninjaObjects1Objects = Hashtable.newFrom({"ninja": gdjs.Untitled_32sceneCode.GDninjaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDdve_959595345e_959595951_95959595Objects1Objects = Hashtable.newFrom({"dveře_1_": gdjs.Untitled_32sceneCode.GDdve_95345e_95951_9595Objects1});
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

gdjs.copyArray(runtimeScene.getObjects("ninja"), gdjs.Untitled_32sceneCode.GDninjaObjects1);
gdjs.copyArray(runtimeScene.getObjects("void"), gdjs.Untitled_32sceneCode.GDvoidObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDninjaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDvoidObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dveře_1_"), gdjs.Untitled_32sceneCode.GDdve_95345e_95951_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("ninja"), gdjs.Untitled_32sceneCode.GDninjaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDninjaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDdve_959595345e_959595951_95959595Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jeskyně", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDninjaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDninjaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDminecraftObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDminecraftObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDvoidObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDvoidObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdve_95345e_95951_9595Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDdve_95345e_95951_9595Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDdvereObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdvereObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
