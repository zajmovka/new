gdjs.jeskyn_283Code = {};
gdjs.jeskyn_283Code.localVariables = [];
gdjs.jeskyn_283Code.GDNewSpriteObjects1= [];
gdjs.jeskyn_283Code.GDNewSpriteObjects2= [];
gdjs.jeskyn_283Code.GDNewSprite2Objects1= [];
gdjs.jeskyn_283Code.GDNewSprite2Objects2= [];
gdjs.jeskyn_283Code.GDhl_95237naObjects1= [];
gdjs.jeskyn_283Code.GDhl_95237naObjects2= [];
gdjs.jeskyn_283Code.GDteleport_9595lol1Objects1= [];
gdjs.jeskyn_283Code.GDteleport_9595lol1Objects2= [];
gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects1= [];
gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects2= [];
gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1= [];
gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects2= [];
gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects1= [];
gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects2= [];
gdjs.jeskyn_283Code.GDpocetminceObjects1= [];
gdjs.jeskyn_283Code.GDpocetminceObjects2= [];
gdjs.jeskyn_283Code.GDred_9595butonObjects1= [];
gdjs.jeskyn_283Code.GDred_9595butonObjects2= [];
gdjs.jeskyn_283Code.GDTExt_95952Objects1= [];
gdjs.jeskyn_283Code.GDTExt_95952Objects2= [];


gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects = Hashtable.newFrom({"Ninja_2_scen": gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1});
gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDteleport_95959595lol1Objects1Objects = Hashtable.newFrom({"teleport_lol1": gdjs.jeskyn_283Code.GDteleport_9595lol1Objects1});
gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects = Hashtable.newFrom({"Ninja_2_scen": gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1});
gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDmr_95959595beast_95959595minceObjects1Objects = Hashtable.newFrom({"mr_beast_mince": gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects1});
gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects = Hashtable.newFrom({"Ninja_2_scen": gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1});
gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDred_95959595butonObjects1Objects = Hashtable.newFrom({"red_buton": gdjs.jeskyn_283Code.GDred_9595butonObjects1});
gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects = Hashtable.newFrom({"Ninja_2_scen": gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1});
gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDTExt_959595952Objects1Objects = Hashtable.newFrom({"TExt_2": gdjs.jeskyn_283Code.GDTExt_95952Objects1});
gdjs.jeskyn_283Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ninja_2_scen"), gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1);
gdjs.copyArray(runtimeScene.getObjects("teleport_lol1"), gdjs.jeskyn_283Code.GDteleport_9595lol1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects, gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDteleport_95959595lol1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1 */
gdjs.copyArray(runtimeScene.getObjects("teleport_lokace"), gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects1);
{for(var i = 0, len = gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length ;i < len;++i) {
    gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i].setPosition((( gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects1.length === 0 ) ? 0 :gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects1[0].getPointX("")),(( gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects1.length === 0 ) ? 0 :gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ninja_2_scen"), gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1);
gdjs.copyArray(runtimeScene.getObjects("mr_beast_mince"), gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects, gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDmr_95959595beast_95959595minceObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1 */
/* Reuse gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pocetmince"), gdjs.jeskyn_283Code.GDpocetminceObjects1);
{for(var i = 0, len = gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects1.length ;i < len;++i) {
    gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length ;i < len;++i) {
    gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i].returnVariable(gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.jeskyn_283Code.GDpocetminceObjects1.length ;i < len;++i) {
    gdjs.jeskyn_283Code.GDpocetminceObjects1[i].getBehavior("Text").setText((gdjs.RuntimeObject.getVariableString(((gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[0].getVariables()).getFromIndex(0))) + " mincí");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ninja_2_scen"), gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length;i<l;++i) {
    if ( gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[k] = gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i];
        ++k;
    }
}
gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pocetmince"), gdjs.jeskyn_283Code.GDpocetminceObjects1);
{for(var i = 0, len = gdjs.jeskyn_283Code.GDpocetminceObjects1.length ;i < len;++i) {
    gdjs.jeskyn_283Code.GDpocetminceObjects1[i].setCenterXInScene((( gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length === 0 ) ? 0 :gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[0].getCenterXInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ninja_2_scen"), gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1);
gdjs.copyArray(runtimeScene.getObjects("red_buton"), gdjs.jeskyn_283Code.GDred_9595butonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects, gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDred_95959595butonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length;i<l;++i) {
    if ( gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i].getVariableNumber(gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[k] = gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1[i];
        ++k;
    }
}
gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ninja_2_scen"), gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1);
gdjs.copyArray(runtimeScene.getObjects("TExt_2"), gdjs.jeskyn_283Code.GDTExt_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDNinja_959595952_95959595scenObjects1Objects, gdjs.jeskyn_283Code.mapOfGDgdjs_9546jeskyn_9595283Code_9546GDTExt_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jeskyn_283Code.GDTExt_95952Objects1 */
{for(var i = 0, len = gdjs.jeskyn_283Code.GDTExt_95952Objects1.length ;i < len;++i) {
    gdjs.jeskyn_283Code.GDTExt_95952Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.jeskyn_283Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jeskyn_283Code.GDNewSpriteObjects1.length = 0;
gdjs.jeskyn_283Code.GDNewSpriteObjects2.length = 0;
gdjs.jeskyn_283Code.GDNewSprite2Objects1.length = 0;
gdjs.jeskyn_283Code.GDNewSprite2Objects2.length = 0;
gdjs.jeskyn_283Code.GDhl_95237naObjects1.length = 0;
gdjs.jeskyn_283Code.GDhl_95237naObjects2.length = 0;
gdjs.jeskyn_283Code.GDteleport_9595lol1Objects1.length = 0;
gdjs.jeskyn_283Code.GDteleport_9595lol1Objects2.length = 0;
gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects1.length = 0;
gdjs.jeskyn_283Code.GDteleport_9595lokaceObjects2.length = 0;
gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects1.length = 0;
gdjs.jeskyn_283Code.GDNinja_95952_9595scenObjects2.length = 0;
gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects1.length = 0;
gdjs.jeskyn_283Code.GDmr_9595beast_9595minceObjects2.length = 0;
gdjs.jeskyn_283Code.GDpocetminceObjects1.length = 0;
gdjs.jeskyn_283Code.GDpocetminceObjects2.length = 0;
gdjs.jeskyn_283Code.GDred_9595butonObjects1.length = 0;
gdjs.jeskyn_283Code.GDred_9595butonObjects2.length = 0;
gdjs.jeskyn_283Code.GDTExt_95952Objects1.length = 0;
gdjs.jeskyn_283Code.GDTExt_95952Objects2.length = 0;

gdjs.jeskyn_283Code.eventsList0(runtimeScene);

return;

}

gdjs['jeskyn_283Code'] = gdjs.jeskyn_283Code;
