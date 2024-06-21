gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1= [];
gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects2= [];
gdjs.Untitled_32sceneCode.GDMaleCharacter13Objects1= [];
gdjs.Untitled_32sceneCode.GDMaleCharacter13Objects2= [];
gdjs.Untitled_32sceneCode.GDStoneBlockObjects1= [];
gdjs.Untitled_32sceneCode.GDStoneBlockObjects2= [];
gdjs.Untitled_32sceneCode.GDCloud1Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud1Objects2= [];
gdjs.Untitled_32sceneCode.GDCloud2Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud2Objects2= [];
gdjs.Untitled_32sceneCode.GDCloud3Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud3Objects2= [];
gdjs.Untitled_32sceneCode.GDGoldIngotObjects1= [];
gdjs.Untitled_32sceneCode.GDGoldIngotObjects2= [];
gdjs.Untitled_32sceneCode.GDGoldIngot2Objects1= [];
gdjs.Untitled_32sceneCode.GDGoldIngot2Objects2= [];
gdjs.Untitled_32sceneCode.GDIsometricVoxelDiamondObjects1= [];
gdjs.Untitled_32sceneCode.GDIsometricVoxelDiamondObjects2= [];
gdjs.Untitled_32sceneCode.GDDiamondStaffObjects1= [];
gdjs.Untitled_32sceneCode.GDDiamondStaffObjects2= [];
gdjs.Untitled_32sceneCode.GDStoneObjects1= [];
gdjs.Untitled_32sceneCode.GDStoneObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDRockHeadObjects1= [];
gdjs.Untitled_32sceneCode.GDRockHeadObjects2= [];
gdjs.Untitled_32sceneCode.GDRockHead2Objects1= [];
gdjs.Untitled_32sceneCode.GDRockHead2Objects2= [];
gdjs.Untitled_32sceneCode.GDnevidimObjects1= [];
gdjs.Untitled_32sceneCode.GDnevidimObjects2= [];
gdjs.Untitled_32sceneCode.GDnecoObjects1= [];
gdjs.Untitled_32sceneCode.GDnecoObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbob_95959595pochodov_959595253Objects1Objects = Hashtable.newFrom({"bob_pochodový": gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Untitled_32sceneCode.GDStoneObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbob_95959595pochodov_959595253Objects1Objects = Hashtable.newFrom({"bob_pochodový": gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbob_95959595pochodov_959595253Objects1Objects = Hashtable.newFrom({"bob_pochodový": gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDnecoObjects1Objects = Hashtable.newFrom({"neco": gdjs.Untitled_32sceneCode.GDnecoObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.Untitled_32sceneCode.GDStoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("bob_pochodový"), gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbob_95959595pochodov_959595253Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDStoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("bob_pochodový"), gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbob_95959595pochodov_959595253Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bob_pochodový"), gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1);
gdjs.copyArray(runtimeScene.getObjects("neco"), gdjs.Untitled_32sceneCode.GDnecoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbob_95959595pochodov_959595253Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDnecoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDnecoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDnecoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDnecoObjects1[0].getPointX("")),(( gdjs.Untitled_32sceneCode.GDnecoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDnecoObjects1[0].getPointY("")));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDbob_9595pochodov_95253Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDMaleCharacter13Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDMaleCharacter13Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDStoneBlockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStoneBlockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoldIngotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoldIngotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGoldIngot2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGoldIngot2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDIsometricVoxelDiamondObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDIsometricVoxelDiamondObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDiamondStaffObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDiamondStaffObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStoneObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStoneObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRockHeadObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRockHeadObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRockHead2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDRockHead2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDnevidimObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDnevidimObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDnecoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDnecoObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
