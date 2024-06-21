gdjs.level_322Code = {};
gdjs.level_322Code.localVariables = [];
gdjs.level_322Code.GDLEs_9595Objects1= [];
gdjs.level_322Code.GDLEs_9595Objects2= [];
gdjs.level_322Code.GDmr_9595beast_9595mince2Objects1= [];
gdjs.level_322Code.GDmr_9595beast_9595mince2Objects2= [];
gdjs.level_322Code.GDNewSpriteObjects1= [];
gdjs.level_322Code.GDNewSpriteObjects2= [];
gdjs.level_322Code.GDNewSprite2Objects1= [];
gdjs.level_322Code.GDNewSprite2Objects2= [];
gdjs.level_322Code.GDninja_9595level_95952Objects1= [];
gdjs.level_322Code.GDninja_9595level_95952Objects2= [];
gdjs.level_322Code.GDNewSprite3Objects1= [];
gdjs.level_322Code.GDNewSprite3Objects2= [];
gdjs.level_322Code.GDvoid_9595Level_95952Objects1= [];
gdjs.level_322Code.GDvoid_9595Level_95952Objects2= [];
gdjs.level_322Code.GDredbutObjects1= [];
gdjs.level_322Code.GDredbutObjects2= [];
gdjs.level_322Code.GDNewTextObjects1= [];
gdjs.level_322Code.GDNewTextObjects2= [];
gdjs.level_322Code.GDtext_9595lvl_95952Objects1= [];
gdjs.level_322Code.GDtext_9595lvl_95952Objects2= [];


gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDninja_95959595level_959595952Objects1Objects = Hashtable.newFrom({"ninja_level_2": gdjs.level_322Code.GDninja_9595level_95952Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDmr_95959595beast_95959595mince2Objects1Objects = Hashtable.newFrom({"mr_beast_mince2": gdjs.level_322Code.GDmr_9595beast_9595mince2Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDninja_95959595level_959595952Objects1Objects = Hashtable.newFrom({"ninja_level_2": gdjs.level_322Code.GDninja_9595level_95952Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDvoid_95959595Level_959595952Objects1Objects = Hashtable.newFrom({"void_Level_2": gdjs.level_322Code.GDvoid_9595Level_95952Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDninja_95959595level_959595952Objects1Objects = Hashtable.newFrom({"ninja_level_2": gdjs.level_322Code.GDninja_9595level_95952Objects1});
gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDredbutObjects1Objects = Hashtable.newFrom({"redbut": gdjs.level_322Code.GDredbutObjects1});
gdjs.level_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("mr_beast_mince2"), gdjs.level_322Code.GDmr_9595beast_9595mince2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ninja_level_2"), gdjs.level_322Code.GDninja_9595level_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDninja_95959595level_959595952Objects1Objects, gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDmr_95959595beast_95959595mince2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level_322Code.GDmr_9595beast_9595mince2Objects1 */
/* Reuse gdjs.level_322Code.GDninja_9595level_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("text_lvl_2"), gdjs.level_322Code.GDtext_9595lvl_95952Objects1);
{for(var i = 0, len = gdjs.level_322Code.GDmr_9595beast_9595mince2Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDmr_9595beast_9595mince2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.level_322Code.GDninja_9595level_95952Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDninja_9595level_95952Objects1[i].returnVariable(gdjs.level_322Code.GDninja_9595level_95952Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.level_322Code.GDtext_9595lvl_95952Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDtext_9595lvl_95952Objects1[i].getBehavior("Text").setText((gdjs.RuntimeObject.getVariableString(((gdjs.level_322Code.GDninja_9595level_95952Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level_322Code.GDninja_9595level_95952Objects1[0].getVariables()).getFromIndex(0))) + " mincí");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ninja_level_2"), gdjs.level_322Code.GDninja_9595level_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("void_Level_2"), gdjs.level_322Code.GDvoid_9595Level_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDninja_95959595level_959595952Objects1Objects, gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDvoid_95959595Level_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ninja_level_2"), gdjs.level_322Code.GDninja_9595level_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("redbut"), gdjs.level_322Code.GDredbutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDninja_95959595level_959595952Objects1Objects, gdjs.level_322Code.mapOfGDgdjs_9546level_9595322Code_9546GDredbutObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ninja_level_2"), gdjs.level_322Code.GDninja_9595level_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level_322Code.GDninja_9595level_95952Objects1.length;i<l;++i) {
    if ( gdjs.level_322Code.GDninja_9595level_95952Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.level_322Code.GDninja_9595level_95952Objects1[k] = gdjs.level_322Code.GDninja_9595level_95952Objects1[i];
        ++k;
    }
}
gdjs.level_322Code.GDninja_9595level_95952Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level_322Code.GDninja_9595level_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("text_lvl_2"), gdjs.level_322Code.GDtext_9595lvl_95952Objects1);
{for(var i = 0, len = gdjs.level_322Code.GDtext_9595lvl_95952Objects1.length ;i < len;++i) {
    gdjs.level_322Code.GDtext_9595lvl_95952Objects1[i].setCenterXInScene((( gdjs.level_322Code.GDninja_9595level_95952Objects1.length === 0 ) ? 0 :gdjs.level_322Code.GDninja_9595level_95952Objects1[0].getCenterXInScene()));
}
}}

}


};

gdjs.level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_322Code.GDLEs_9595Objects1.length = 0;
gdjs.level_322Code.GDLEs_9595Objects2.length = 0;
gdjs.level_322Code.GDmr_9595beast_9595mince2Objects1.length = 0;
gdjs.level_322Code.GDmr_9595beast_9595mince2Objects2.length = 0;
gdjs.level_322Code.GDNewSpriteObjects1.length = 0;
gdjs.level_322Code.GDNewSpriteObjects2.length = 0;
gdjs.level_322Code.GDNewSprite2Objects1.length = 0;
gdjs.level_322Code.GDNewSprite2Objects2.length = 0;
gdjs.level_322Code.GDninja_9595level_95952Objects1.length = 0;
gdjs.level_322Code.GDninja_9595level_95952Objects2.length = 0;
gdjs.level_322Code.GDNewSprite3Objects1.length = 0;
gdjs.level_322Code.GDNewSprite3Objects2.length = 0;
gdjs.level_322Code.GDvoid_9595Level_95952Objects1.length = 0;
gdjs.level_322Code.GDvoid_9595Level_95952Objects2.length = 0;
gdjs.level_322Code.GDredbutObjects1.length = 0;
gdjs.level_322Code.GDredbutObjects2.length = 0;
gdjs.level_322Code.GDNewTextObjects1.length = 0;
gdjs.level_322Code.GDNewTextObjects2.length = 0;
gdjs.level_322Code.GDtext_9595lvl_95952Objects1.length = 0;
gdjs.level_322Code.GDtext_9595lvl_95952Objects2.length = 0;

gdjs.level_322Code.eventsList0(runtimeScene);

return;

}

gdjs['level_322Code'] = gdjs.level_322Code;
