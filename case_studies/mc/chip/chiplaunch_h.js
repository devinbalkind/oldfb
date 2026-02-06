function MM_initTimelines() {
    //MM_initTimelines() Copyright 1997 Macromedia, Inc. All rights reserved.
    var ns = navigator.appName == "Netscape";
    document.MM_Time = new Array(6);
    document.MM_Time[0] = new Array(14);
    document.MM_Time["introlineup"] = document.MM_Time[0];
    document.MM_Time[0].MM_Name = "introlineup";
    document.MM_Time[0].fps = 20;
    document.MM_Time[0][0] = new String("sprite");
    document.MM_Time[0][0].slot = 1;
    if (ns)
        document.MM_Time[0][0].obj = document.nav1;
    else
        document.MM_Time[0][0].obj = document.all ? document.all["nav1"] : null;
    document.MM_Time[0][0].keyFrames = new Array(1, 15);
    document.MM_Time[0][0].values = new Array(5);
    document.MM_Time[0][0].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[0][0].values[0].prop = "left";
    document.MM_Time[0][0].values[1] = new Array(622,591,560,529,499,468,437,406,375,344,313,283,252,221,190);
    document.MM_Time[0][0].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[0][0].values[0].prop2 = "style";
        document.MM_Time[0][0].values[1].prop2 = "style";
    }
    document.MM_Time[0][0].values[2] = new Array("visible","inherit");
    document.MM_Time[0][0].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[0][0].values[2].prop2 = "style";
    document.MM_Time[0][0].values[3] = new Array(600,600,600,600,600,600,600,600,600,600,600,600,600,600,600);
    document.MM_Time[0][0].values[3].prop = "width";
    if (!ns)
        document.MM_Time[0][0].values[3].prop2 = "style";
    document.MM_Time[0][0].values[4] = new Array("55","1");
    document.MM_Time[0][0].values[4].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][0].values[4].prop2 = "style";
    document.MM_Time[0][1] = new String("sprite");
    document.MM_Time[0][1].slot = 2;
    if (ns)
        document.MM_Time[0][1].obj = document.nav2;
    else
        document.MM_Time[0][1].obj = document.all ? document.all["nav2"] : null;
    document.MM_Time[0][1].keyFrames = new Array(5, 9, 19);
    document.MM_Time[0][1].values = new Array(5);
    document.MM_Time[0][1].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[0][1].values[0].prop = "left";
    document.MM_Time[0][1].values[1] = new Array(620,595,570,543,506,484,459,434,406,377,346,315,284,253,222);
    document.MM_Time[0][1].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[0][1].values[0].prop2 = "style";
        document.MM_Time[0][1].values[1].prop2 = "style";
    }
    document.MM_Time[0][1].values[2] = new Array("inherit","inherit","inherit");
    document.MM_Time[0][1].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[0][1].values[2].prop2 = "style";
    document.MM_Time[0][1].values[3] = new Array(200,300,400,500,600,600,600,600,600,600,600,600,600,600,600);
    document.MM_Time[0][1].values[3].prop = "width";
    if (!ns)
        document.MM_Time[0][1].values[3].prop2 = "style";
    document.MM_Time[0][1].values[4] = new Array("1","1","1");
    document.MM_Time[0][1].values[4].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][1].values[4].prop2 = "style";
    document.MM_Time[0][2] = new String("behavior");
    document.MM_Time[0][2].frame = 5;
    document.MM_Time[0][2].value = "MM_showHideLayers('document.layers[\\\'nav2\\\']','document.all[\\\'nav2\\\']','show')";
    document.MM_Time[0][3] = new String("sprite");
    document.MM_Time[0][3].slot = 3;
    if (ns)
        document.MM_Time[0][3].obj = document.nav3;
    else
        document.MM_Time[0][3].obj = document.all ? document.all["nav3"] : null;
    document.MM_Time[0][3].keyFrames = new Array(10, 16, 24);
    document.MM_Time[0][3].values = new Array(5);
    document.MM_Time[0][3].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[0][3].values[0].prop = "left";
    document.MM_Time[0][3].values[1] = new Array(620,595,570,544,519,492,463,439,414,388,362,335,308,281,254);
    document.MM_Time[0][3].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[0][3].values[0].prop2 = "style";
        document.MM_Time[0][3].values[1].prop2 = "style";
    }
    document.MM_Time[0][3].values[2] = new Array("inherit","inherit","inherit");
    document.MM_Time[0][3].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[0][3].values[2].prop2 = "style";
    document.MM_Time[0][3].values[3] = new Array(200,266,333,400,466,533,600,600,600,600,600,600,600,600,600);
    document.MM_Time[0][3].values[3].prop = "width";
    if (!ns)
        document.MM_Time[0][3].values[3].prop2 = "style";
    document.MM_Time[0][3].values[4] = new Array("1","1","1");
    document.MM_Time[0][3].values[4].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][3].values[4].prop2 = "style";
    document.MM_Time[0][4] = new String("behavior");
    document.MM_Time[0][4].frame = 10;
    document.MM_Time[0][4].value = "MM_showHideLayers('document.layers[\\\'nav3\\\']','document.all[\\\'nav3\\\']','show')";
    document.MM_Time[0][5] = new String("sprite");
    document.MM_Time[0][5].slot = 4;
    if (ns)
        document.MM_Time[0][5].obj = document.nav4;
    else
        document.MM_Time[0][5].obj = document.all ? document.all["nav4"] : null;
    document.MM_Time[0][5].keyFrames = new Array(15, 21, 29);
    document.MM_Time[0][5].values = new Array(5);
    document.MM_Time[0][5].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[0][5].values[0].prop = "left";
    document.MM_Time[0][5].values[1] = new Array(620,597,574,551,528,503,477,455,432,409,385,360,335,311,286);
    document.MM_Time[0][5].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[0][5].values[0].prop2 = "style";
        document.MM_Time[0][5].values[1].prop2 = "style";
    }
    document.MM_Time[0][5].values[2] = new Array("inherit","inherit","inherit");
    document.MM_Time[0][5].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[0][5].values[2].prop2 = "style";
    document.MM_Time[0][5].values[3] = new Array(200,266,333,400,466,533,600,600,600,600,600,600,600,600,600);
    document.MM_Time[0][5].values[3].prop = "width";
    if (!ns)
        document.MM_Time[0][5].values[3].prop2 = "style";
    document.MM_Time[0][5].values[4] = new Array("1","1","1");
    document.MM_Time[0][5].values[4].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][5].values[4].prop2 = "style";
    document.MM_Time[0][6] = new String("behavior");
    document.MM_Time[0][6].frame = 15;
    document.MM_Time[0][6].value = "MM_showHideLayers('document.layers[\\\'navleft\\\']','document.all[\\\'navleft\\\']','show','document.layers[\\\'nav4\\\']','document.all[\\\'nav4\\\']','show')";
    document.MM_Time[0][7] = new String("sprite");
    document.MM_Time[0][7].slot = 5;
    if (ns)
        document.MM_Time[0][7].obj = document.nav5;
    else
        document.MM_Time[0][7].obj = document.all ? document.all["nav5"] : null;
    document.MM_Time[0][7].keyFrames = new Array(20, 34);
    document.MM_Time[0][7].values = new Array(5);
    document.MM_Time[0][7].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[0][7].values[0].prop = "left";
    document.MM_Time[0][7].values[1] = new Array(620,598,577,555,534,512,491,469,447,426,404,383,361,340,318);
    document.MM_Time[0][7].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[0][7].values[0].prop2 = "style";
        document.MM_Time[0][7].values[1].prop2 = "style";
    }
    document.MM_Time[0][7].values[2] = new Array("inherit","inherit");
    document.MM_Time[0][7].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[0][7].values[2].prop2 = "style";
    document.MM_Time[0][7].values[3] = new Array(200,228,257,285,314,342,371,400,428,457,485,514,542,571,600);
    document.MM_Time[0][7].values[3].prop = "width";
    if (!ns)
        document.MM_Time[0][7].values[3].prop2 = "style";
    document.MM_Time[0][7].values[4] = new Array("1","1");
    document.MM_Time[0][7].values[4].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][7].values[4].prop2 = "style";
    document.MM_Time[0][8] = new String("behavior");
    document.MM_Time[0][8].frame = 20;
    document.MM_Time[0][8].value = "MM_showHideLayers('document.layers[\\\'nav5\\\']','document.all[\\\'nav5\\\']','show')";
    document.MM_Time[0][9] = new String("sprite");
    document.MM_Time[0][9].slot = 6;
    if (ns)
        document.MM_Time[0][9].obj = document.nav6;
    else
        document.MM_Time[0][9].obj = document.all ? document.all["nav6"] : null;
    document.MM_Time[0][9].keyFrames = new Array(25, 39);
    document.MM_Time[0][9].values = new Array(5);
    document.MM_Time[0][9].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[0][9].values[0].prop = "left";
    document.MM_Time[0][9].values[1] = new Array(620,601,581,562,543,524,504,485,466,446,427,408,389,369,350);
    document.MM_Time[0][9].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[0][9].values[0].prop2 = "style";
        document.MM_Time[0][9].values[1].prop2 = "style";
    }
    document.MM_Time[0][9].values[2] = new Array("inherit","inherit");
    document.MM_Time[0][9].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[0][9].values[2].prop2 = "style";
    document.MM_Time[0][9].values[3] = new Array(200,228,257,285,314,342,371,400,428,457,485,514,542,571,600);
    document.MM_Time[0][9].values[3].prop = "width";
    if (!ns)
        document.MM_Time[0][9].values[3].prop2 = "style";
    document.MM_Time[0][9].values[4] = new Array("1","1");
    document.MM_Time[0][9].values[4].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][9].values[4].prop2 = "style";
    document.MM_Time[0][10] = new String("behavior");
    document.MM_Time[0][10].frame = 25;
    document.MM_Time[0][10].value = "MM_showHideLayers('document.layers[\\\'nav6\\\']','document.all[\\\'nav6\\\']','show')";
    document.MM_Time[0][11] = new String("sprite");
    document.MM_Time[0][11].slot = 7;
    if (ns)
        document.MM_Time[0][11].obj = document.nav7;
    else
        document.MM_Time[0][11].obj = document.all ? document.all["nav7"] : null;
    document.MM_Time[0][11].keyFrames = new Array(29, 43);
    document.MM_Time[0][11].values = new Array(5);
    document.MM_Time[0][11].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[0][11].values[0].prop = "left";
    document.MM_Time[0][11].values[1] = new Array(620,603,586,569,552,535,518,501,484,467,450,433,416,399,382);
    document.MM_Time[0][11].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[0][11].values[0].prop2 = "style";
        document.MM_Time[0][11].values[1].prop2 = "style";
    }
    document.MM_Time[0][11].values[2] = new Array("visible","inherit");
    document.MM_Time[0][11].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[0][11].values[2].prop2 = "style";
    document.MM_Time[0][11].values[3] = new Array(200,228,257,285,314,342,371,400,428,457,485,514,542,571,600);
    document.MM_Time[0][11].values[3].prop = "width";
    if (!ns)
        document.MM_Time[0][11].values[3].prop2 = "style";
    document.MM_Time[0][11].values[4] = new Array("1","1");
    document.MM_Time[0][11].values[4].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][11].values[4].prop2 = "style";
    document.MM_Time[0][12] = new String("sprite");
    document.MM_Time[0][12].slot = 8;
    if (ns)
        document.MM_Time[0][12].obj = document.navleft;
    else
        document.MM_Time[0][12].obj = document.all ? document.all["navleft"] : null;
    document.MM_Time[0][12].keyFrames = new Array(1, 29);
    document.MM_Time[0][12].values = new Array(4);
    document.MM_Time[0][12].values[0] = new Array("hidden","visible");
    document.MM_Time[0][12].values[0].prop = "visibility";
    if (!ns)
        document.MM_Time[0][12].values[0].prop2 = "style";
    document.MM_Time[0][12].values[1] = new Array(-30,-28,-26,-24,-22,-20,-18,-15,-13,-11,-9,-7,-5,-3,-1,1,3,5,7,9,11,14,16,18,20,22,24,26,28);
    document.MM_Time[0][12].values[1].prop = "left";
    document.MM_Time[0][12].values[2] = new Array(190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190);
    document.MM_Time[0][12].values[2].prop = "top";
    if (!ns) {
        document.MM_Time[0][12].values[1].prop2 = "style";
        document.MM_Time[0][12].values[2].prop2 = "style";
    }
    document.MM_Time[0][12].values[3] = new Array("1","1");
    document.MM_Time[0][12].values[3].prop = "zIndex";
    if (!ns)
        document.MM_Time[0][12].values[3].prop2 = "style";
    document.MM_Time[0][13] = new String("behavior");
    document.MM_Time[0][13].frame = 29;
    document.MM_Time[0][13].value = "MM_showHideLayers('document.layers[\\\'nav7\\\']','document.all[\\\'nav7\\\']','show')";
    document.MM_Time[0].lastFrame = 43;
    document.MM_Time[1] = new Array(3);
    document.MM_Time["dragme"] = document.MM_Time[1];
    document.MM_Time[1].MM_Name = "dragme";
    document.MM_Time[1].fps = 15;
    document.MM_Time[1][0] = new String("sprite");
    document.MM_Time[1][0].slot = 1;
    if (ns)
        document.MM_Time[1][0].obj = document.dragme;
    else
        document.MM_Time[1][0].obj = document.all ? document.all["dragme"] : null;
    document.MM_Time[1][0].keyFrames = new Array(1, 5, 10, 20);
    document.MM_Time[1][0].values = new Array(5);
    document.MM_Time[1][0].values[0] = new Array(552,527,502,479,459,460,466,472,479,485,482,479,477,474,471,469,466,463,461,458);
    document.MM_Time[1][0].values[0].prop = "left";
    document.MM_Time[1][0].values[1] = new Array(45,44,44,44,47,57,64,69,74,79,76,73,70,66,63,60,57,54,51,48);
    document.MM_Time[1][0].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[1][0].values[0].prop2 = "style";
        document.MM_Time[1][0].values[1].prop2 = "style";
    }
    document.MM_Time[1][0].values[2] = new Array(83,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82);
    document.MM_Time[1][0].values[2].prop = "width";
    if (!ns)
        document.MM_Time[1][0].values[2].prop2 = "style";
    document.MM_Time[1][0].values[3] = new Array(19,18,18,17,17,16,16,16,16,16,15,15,15,15,15,15,15,15,15,15);
    document.MM_Time[1][0].values[3].prop = "height";
    if (!ns)
        document.MM_Time[1][0].values[3].prop2 = "style";
    document.MM_Time[1][0].values[4] = new Array("hidden","inherit","inherit","inherit");
    document.MM_Time[1][0].values[4].prop = "visibility";
    if (!ns)
        document.MM_Time[1][0].values[4].prop2 = "style";
    document.MM_Time[1][1] = new String("behavior");
    document.MM_Time[1][1].frame = 1;
    document.MM_Time[1][1].value = "MM_showHideLayers('document.layers[\\\'dragme\\\']','document.all[\\\'dragme\\\']','inherit')";
    document.MM_Time[1][2] = new String("behavior");
    document.MM_Time[1][2].frame = 21;
    document.MM_Time[1][2].value = "MM_timelineGoto('dragme','1')";
    document.MM_Time[1].lastFrame = 21;
    document.MM_Time[2] = new Array(9);
    document.MM_Time["fadeout"] = document.MM_Time[2];
    document.MM_Time[2].MM_Name = "fadeout";
    document.MM_Time[2].fps = 45;
    document.MM_Time[2][0] = new String("sprite");
    document.MM_Time[2][0].slot = 1;
    if (ns)
        document.MM_Time[2][0].obj = document.nav1;
    else
        document.MM_Time[2][0].obj = document.all ? document.all["nav1"] : null;
    document.MM_Time[2][0].keyFrames = new Array(1, 32);
    document.MM_Time[2][0].values = new Array(4);
    document.MM_Time[2][0].values[0] = new Array(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60);
    document.MM_Time[2][0].values[0].prop = "left";
    document.MM_Time[2][0].values[1] = new Array(190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190,190);
    document.MM_Time[2][0].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[2][0].values[0].prop2 = "style";
        document.MM_Time[2][0].values[1].prop2 = "style";
    }
    document.MM_Time[2][0].values[2] = new Array("inherit","inherit");
    document.MM_Time[2][0].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[2][0].values[2].prop2 = "style";
    document.MM_Time[2][0].values[3] = new Array("1","1");
    document.MM_Time[2][0].values[3].prop = "zIndex";
    if (!ns)
        document.MM_Time[2][0].values[3].prop2 = "style";
    document.MM_Time[2][1] = new String("behavior");
    document.MM_Time[2][1].frame = 1;
    document.MM_Time[2][1].value = "MM_showHideLayers('document.layers[\\\'nav1\\\']','document.all[\\\'nav1\\\']','hide')";
    document.MM_Time[2][2] = new String("behavior");
    document.MM_Time[2][2].frame = 5;
    document.MM_Time[2][2].value = "MM_showHideLayers('document.layers[\\\'nav2\\\']','document.all[\\\'nav2\\\']','hide')";
    document.MM_Time[2][3] = new String("behavior");
    document.MM_Time[2][3].frame = 10;
    document.MM_Time[2][3].value = "MM_showHideLayers('document.layers[\\\'nav3\\\']','document.all[\\\'nav3\\\']','hide')";
    document.MM_Time[2][4] = new String("behavior");
    document.MM_Time[2][4].frame = 15;
    document.MM_Time[2][4].value = "MM_showHideLayers('document.layers[\\\'nav4\\\']','document.all[\\\'nav4\\\']','hide')";
    document.MM_Time[2][5] = new String("behavior");
    document.MM_Time[2][5].frame = 20;
    document.MM_Time[2][5].value = "MM_showHideLayers('document.layers[\\\'nav5\\\']','document.all[\\\'nav5\\\']','hide')";
    document.MM_Time[2][6] = new String("behavior");
    document.MM_Time[2][6].frame = 25;
    document.MM_Time[2][6].value = "MM_showHideLayers('document.layers[\\\'nav6\\\']','document.all[\\\'nav6\\\']','hide')";
    document.MM_Time[2][7] = new String("behavior");
    document.MM_Time[2][7].frame = 30;
    document.MM_Time[2][7].value = "MM_showHideLayers('document.layers[\\\'nav7\\\']','document.all[\\\'nav7\\\']','hide')";
    document.MM_Time[2][8] = new String("behavior");
    document.MM_Time[2][8].frame = 32;
    document.MM_Time[2][8].value = "MM_showHideLayers('document.layers[\\\'nav1\\\']','document.all[\\\'nav1\\\']','hide','document.layers[\\\'playersmain\\\']','document.all[\\\'playersmain\\\']','show')";
    document.MM_Time[2].lastFrame = 32;
    document.MM_Time[3] = new Array(12);
    document.MM_Time["shrink"] = document.MM_Time[3];
    document.MM_Time[3].MM_Name = "shrink";
    document.MM_Time[3].fps = 60;
    document.MM_Time[3][0] = new String("sprite");
    document.MM_Time[3][0].slot = 1;
    if (ns)
        document.MM_Time[3][0].obj = document.playersmain;
    else
        document.MM_Time[3][0].obj = document.all ? document.all["playersmain"] : null;
    document.MM_Time[3][0].keyFrames = new Array(1, 10, 21);
    document.MM_Time[3][0].values = new Array(4);
    document.MM_Time[3][0].values[0] = new Array(95,129,163,198,232,266,300,335,369,403,375,347,319,291,263,235,208,180,152,124,96);
    document.MM_Time[3][0].values[0].prop = "left";
    document.MM_Time[3][0].values[1] = new Array(186,204,222,240,258,276,294,312,330,348,333,319,304,289,275,260,246,231,216,202,187);
    document.MM_Time[3][0].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[3][0].values[0].prop2 = "style";
        document.MM_Time[3][0].values[1].prop2 = "style";
    }
    document.MM_Time[3][0].values[2] = new Array("visible","visible","inherit");
    document.MM_Time[3][0].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[3][0].values[2].prop2 = "style";
    document.MM_Time[3][0].values[3] = new Array("12","12","15");
    document.MM_Time[3][0].values[3].prop = "zIndex";
    if (!ns)
        document.MM_Time[3][0].values[3].prop2 = "style";
    document.MM_Time[3][1] = new String("behavior");
    document.MM_Time[3][1].frame = 2;
    document.MM_Time[3][1].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\']','document.all[\\\'playersmain\\\']','inherit','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink0\\\']','document.all[\\\'insideplayershrink0\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmondexoff\\\']','document.all[\\\'insideplayersmondexoff\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmaoscooff\\\']','document.all[\\\'insideplayersmaoscooff\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmcioff\\\']','document.all[\\\'insideplayersmcioff\\\']','hide')";
    document.MM_Time[3][2] = new String("behavior");
    document.MM_Time[3][2].frame = 4;
    document.MM_Time[3][2].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','hide')";
    document.MM_Time[3][3] = new String("behavior");
    document.MM_Time[3][3].frame = 6;
    document.MM_Time[3][3].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','hide')";
    document.MM_Time[3][4] = new String("behavior");
    document.MM_Time[3][4].frame = 8;
    document.MM_Time[3][4].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink4\\\']','document.all[\\\'insideplayershrink4\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','hide')";
    document.MM_Time[3][5] = new String("behavior");
    document.MM_Time[3][5].frame = 10;
    document.MM_Time[3][5].value = "MM_timelineStop('shrink');MM_showHideLayers('document.layers[\\\'playersmci\\\']','document.all[\\\'playersmci\\\']','show')";
    document.MM_Time[3][6] = new String("behavior");
    document.MM_Time[3][6].frame = 12;
    document.MM_Time[3][6].value = "MM_showHideLayers('document.layers[\\\'playersmci\\\']','document.all[\\\'playersmci\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink4\\\']','document.all[\\\'insideplayershrink4\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','show')";
    document.MM_Time[3][7] = new String("behavior");
    document.MM_Time[3][7].frame = 14;
    document.MM_Time[3][7].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','show')";
    document.MM_Time[3][8] = new String("behavior");
    document.MM_Time[3][8].frame = 16;
    document.MM_Time[3][8].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','show')";
    document.MM_Time[3][9] = new String("behavior");
    document.MM_Time[3][9].frame = 18;
    document.MM_Time[3][9].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink0\\\']','document.all[\\\'insideplayershrink0\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','hide')";
    document.MM_Time[3][10] = new String("behavior");
    document.MM_Time[3][10].frame = 20;
    document.MM_Time[3][10].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink0\\\']','document.all[\\\'insideplayershrink0\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','hide')";
    document.MM_Time[3][11] = new String("behavior");
    document.MM_Time[3][11].frame = 21;
    document.MM_Time[3][11].value = "MM_timelineStop('shrink');MM_timelineGoto('shrink','1');MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmondexoff\\\']','document.all[\\\'insideplayersmondexoff\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmaoscooff\\\']','document.all[\\\'insideplayersmaoscooff\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmcioff\\\']','document.all[\\\'insideplayersmcioff\\\']','show')";
    document.MM_Time[3].lastFrame = 21;
    document.MM_Time[4] = new Array(12);
    document.MM_Time["shrink2"] = document.MM_Time[4];
    document.MM_Time[4].MM_Name = "shrink2";
    document.MM_Time[4].fps = 60;
    document.MM_Time[4][0] = new String("sprite");
    document.MM_Time[4][0].slot = 1;
    if (ns)
        document.MM_Time[4][0].obj = document.playersmain;
    else
        document.MM_Time[4][0].obj = document.all ? document.all["playersmain"] : null;
    document.MM_Time[4][0].keyFrames = new Array(1, 10, 21);
    document.MM_Time[4][0].values = new Array(4);
    document.MM_Time[4][0].values[0] = new Array(95,129,163,198,232,266,300,335,369,403,375,347,319,291,263,235,207,179,151,123,95);
    document.MM_Time[4][0].values[0].prop = "left";
    document.MM_Time[4][0].values[1] = new Array(186,204,222,240,258,276,294,312,330,348,333,319,304,289,274,260,245,230,215,201,186);
    document.MM_Time[4][0].values[1].prop = "top";
    if (!ns) {
        document.MM_Time[4][0].values[0].prop2 = "style";
        document.MM_Time[4][0].values[1].prop2 = "style";
    }
    document.MM_Time[4][0].values[2] = new Array("inherit","inherit","inherit");
    document.MM_Time[4][0].values[2].prop = "visibility";
    if (!ns)
        document.MM_Time[4][0].values[2].prop2 = "style";
    document.MM_Time[4][0].values[3] = new Array("12","12","12");
    document.MM_Time[4][0].values[3].prop = "zIndex";
    if (!ns)
        document.MM_Time[4][0].values[3].prop2 = "style";
    document.MM_Time[4][1] = new String("behavior");
    document.MM_Time[4][1].frame = 2;
    document.MM_Time[4][1].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink0\\\']','document.all[\\\'insideplayershrink0\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','show')";
    document.MM_Time[4][2] = new String("behavior");
    document.MM_Time[4][2].frame = 4;
    document.MM_Time[4][2].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','hide')";
    document.MM_Time[4][3] = new String("behavior");
    document.MM_Time[4][3].frame = 6;
    document.MM_Time[4][3].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','hide')";
    document.MM_Time[4][4] = new String("behavior");
    document.MM_Time[4][4].frame = 8;
    document.MM_Time[4][4].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink42\\\']','document.all[\\\'insideplayershrink42\\\']','show')";
    document.MM_Time[4][5] = new String("behavior");
    document.MM_Time[4][5].frame = 10;
    document.MM_Time[4][5].value = "MM_timelineStop('shrink2');MM_showHideLayers('document.layers[\\\'playersmaosco\\\']','document.all[\\\'playersmaosco\\\']','show')";
    document.MM_Time[4][6] = new String("behavior");
    document.MM_Time[4][6].frame = 11;
    document.MM_Time[4][6].value = "MM_showHideLayers('document.layers[\\\'playersmaosco\\\']','document.all[\\\'playersmaosco\\\']','hide')";
    document.MM_Time[4][7] = new String("behavior");
    document.MM_Time[4][7].frame = 12;
    document.MM_Time[4][7].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink4\\\']','document.all[\\\'insideplayershrink4\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','show')";
    document.MM_Time[4][8] = new String("behavior");
    document.MM_Time[4][8].frame = 14;
    document.MM_Time[4][8].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','show')";
    document.MM_Time[4][9] = new String("behavior");
    document.MM_Time[4][9].frame = 16;
    document.MM_Time[4][9].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','show')";
    document.MM_Time[4][10] = new String("behavior");
    document.MM_Time[4][10].frame = 18;
    document.MM_Time[4][10].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink0\\\']','document.all[\\\'insideplayershrink0\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','hide')";
    document.MM_Time[4][11] = new String("behavior");
    document.MM_Time[4][11].frame = 21;
    document.MM_Time[4][11].value = "MM_timelineStop('shrink2');MM_timelineGoto('shrink2','1');MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmondexoff\\\']','document.all[\\\'insideplayersmondexoff\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmaoscooff\\\']','document.all[\\\'insideplayersmaoscooff\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmcioff\\\']','document.all[\\\'insideplayersmcioff\\\']','show')";
    document.MM_Time[4].lastFrame = 21;
    document.MM_Time[5] = new Array(12);
    document.MM_Time["shrink3"] = document.MM_Time[5];
    document.MM_Time[5].MM_Name = "shrink3";
    document.MM_Time[5].fps = 60;
    document.MM_Time[5][0] = new String("sprite");
    document.MM_Time[5][0].slot = 1;
    if (ns)
        document.MM_Time[5][0].obj = document.playersmain;
    else
        document.MM_Time[5][0].obj = document.all ? document.all["playersmain"] : null;
    document.MM_Time[5][0].keyFrames = new Array(1, 10, 21);
    document.MM_Time[5][0].values = new Array(3);
    document.MM_Time[5][0].values[0] = new Array("visible","visible","visible");
    document.MM_Time[5][0].values[0].prop = "visibility";
    if (!ns)
        document.MM_Time[5][0].values[0].prop2 = "style";
    document.MM_Time[5][0].values[1] = new Array(95,129,163,198,232,266,300,335,369,403,375,347,319,291,263,235,207,179,151,123,95);
    document.MM_Time[5][0].values[1].prop = "left";
    document.MM_Time[5][0].values[2] = new Array(186,204,222,240,258,276,294,312,330,348,333,319,304,289,274,260,245,230,215,201,186);
    document.MM_Time[5][0].values[2].prop = "top";
    if (!ns) {
        document.MM_Time[5][0].values[1].prop2 = "style";
        document.MM_Time[5][0].values[2].prop2 = "style";
    }
    document.MM_Time[5][1] = new String("behavior");
    document.MM_Time[5][1].frame = 2;
    document.MM_Time[5][1].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink0\\\']','document.all[\\\'insideplayershrink0\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','show')";
    document.MM_Time[5][2] = new String("behavior");
    document.MM_Time[5][2].frame = 4;
    document.MM_Time[5][2].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','hide')";
    document.MM_Time[5][3] = new String("behavior");
    document.MM_Time[5][3].frame = 6;
    document.MM_Time[5][3].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','hide')";
    document.MM_Time[5][4] = new String("behavior");
    document.MM_Time[5][4].frame = 8;
    document.MM_Time[5][4].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink43\\\']','document.all[\\\'insideplayershrink43\\\']','show')";
    document.MM_Time[5][5] = new String("behavior");
    document.MM_Time[5][5].frame = 10;
    document.MM_Time[5][5].value = "MM_timelineStop('shrink3');MM_showHideLayers('document.layers[\\\'playersmondex\\\']','document.all[\\\'playersmondex\\\']','show')";
    document.MM_Time[5][6] = new String("behavior");
    document.MM_Time[5][6].frame = 12;
    document.MM_Time[5][6].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink43\\\']','document.all[\\\'insideplayershrink43\\\']','hide')";
    document.MM_Time[5][7] = new String("behavior");
    document.MM_Time[5][7].frame = 14;
    document.MM_Time[5][7].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink3\\\']','document.all[\\\'insideplayershrink3\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','show')";
    document.MM_Time[5][8] = new String("behavior");
    document.MM_Time[5][8].frame = 16;
    document.MM_Time[5][8].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink2\\\']','document.all[\\\'insideplayershrink2\\\']','hide','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','show')";
    document.MM_Time[5][9] = new String("behavior");
    document.MM_Time[5][9].frame = 18;
    document.MM_Time[5][9].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink0\\\']','document.all[\\\'insideplayershrink0\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayershrink1\\\']','document.all[\\\'insideplayershrink1\\\']','hide')";
    document.MM_Time[5][10] = new String("behavior");
    document.MM_Time[5][10].frame = 20;
    document.MM_Time[5][10].value = "MM_showHideLayers('document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmondexoff\\\']','document.all[\\\'insideplayersmondexoff\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmaoscooff\\\']','document.all[\\\'insideplayersmaoscooff\\\']','show','document.layers[\\\'playersmain\\\'].document.layers[\\\'insideplayersmcioff\\\']','document.all[\\\'insideplayersmcioff\\\']','show')";
    document.MM_Time[5][11] = new String("behavior");
    document.MM_Time[5][11].frame = 21;
    document.MM_Time[5][11].value = "MM_timelineGoto('shrink3','1');MM_timelineStop('shrink3')";
    document.MM_Time[5].lastFrame = 21;
    for (i=0; i<document.MM_Time.length; i++) {
        document.MM_Time[i].ID = null;
        document.MM_Time[i].curFrame = 0;
        document.MM_Time[i].delay = 1000/document.MM_Time[i].fps;
    }
}

function MM_showHideLayers() { //v1.2
  var i, visStr, args, theObj;
  args = MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) { //with arg triples (objNS,objIE,visStr)
    visStr   = args[i+2];
    if (navigator.appName == 'Netscape' && document.layers != null) {
      theObj = eval(args[i]);
      if (theObj) theObj.visibility = visStr;
    } else if (document.all != null) { //IE
      if (visStr == 'show') visStr = 'visible'; //convert vals
      if (visStr == 'hide') visStr = 'hidden';
      theObj = eval(args[i+1]);
      if (theObj) theObj.style.visibility = visStr;
  } }
}

function MM_preloadImages() { //v1.2
  if (document.images) {
    var imgFiles = MM_preloadImages.arguments;
    var preloadArray = new Array();
    for (var i=0; i<imgFiles.length; i++) {
      preloadArray[i] = new Image;
      preloadArray[i].src = imgFiles[i];
    }
  }
}

function MM_swapImage() { //v1.2
  var i,j=0,objStr,obj,swapArray=new Array,oldArray=document.MM_swapImgData;
  for (i=0; i < (MM_swapImage.arguments.length-2); i+=3) {
    objStr = MM_swapImage.arguments[(navigator.appName == 'Netscape')?i:i+1];
    if ((objStr.indexOf('document.layers[')==0 && document.layers==null) ||
        (objStr.indexOf('document.all[')   ==0 && document.all   ==null))
      objStr = 'document'+objStr.substring(objStr.lastIndexOf('.'),objStr.length);
    obj = eval(objStr);
    if (obj != null) {
      swapArray[j++] = obj;
      swapArray[j++] = (oldArray==null || oldArray[j-1]!=obj)?obj.src:oldArray[j];
      obj.src = MM_swapImage.arguments[i+2];
  } }
  document.MM_swapImgData = swapArray; //used for restore
}

function MM_swapImgRestore() { //v1.2
  if (document.MM_swapImgData != null)
    for (var i=0; i<(document.MM_swapImgData.length-1); i+=2)
      document.MM_swapImgData[i].src = document.MM_swapImgData[i+1];
}

function MM_timelinePlay(tmLnName, myID) { //v1.2
  //Copyright 1997 Macromedia, Inc. All rights reserved.
  var i,j,tmLn,props,keyFrm,sprite,numKeyFr,firstKeyFr,propNum,theObj,firstTime=false;
  if (document.MM_Time == null) MM_initTimelines(); //if *very* 1st time
  tmLn = document.MM_Time[tmLnName];
  if (myID == null) { myID = ++tmLn.ID; firstTime=true;}//if new call, incr ID
  if (myID == tmLn.ID) { //if Im newest
    setTimeout('MM_timelinePlay("'+tmLnName+'",'+myID+')',tmLn.delay);
    fNew = ++tmLn.curFrame;
    for (i=0; i<tmLn.length; i++) {
      sprite = tmLn[i];
      if (sprite.charAt(0) == 's') {
        if (sprite.obj) {
          numKeyFr = sprite.keyFrames.length; firstKeyFr = sprite.keyFrames[0];
          if (fNew >= firstKeyFr && fNew <= sprite.keyFrames[numKeyFr-1]) {//in range
            keyFrm=1;
            for (j=0; j<sprite.values.length; j++) {
              props = sprite.values[j]; 
              if (numKeyFr != props.length) {
                if (props.prop2 == null) sprite.obj[props.prop] = props[fNew-firstKeyFr];
                else        sprite.obj[props.prop2][props.prop] = props[fNew-firstKeyFr];
              } else {
                while (keyFrm<numKeyFr && fNew>=sprite.keyFrames[keyFrm]) keyFrm++;
                if (firstTime || fNew==sprite.keyFrames[keyFrm-1]) {
                  if (props.prop2 == null) sprite.obj[props.prop] = props[keyFrm-1];
                  else        sprite.obj[props.prop2][props.prop] = props[keyFrm-1];
        } } } } }
      } else if (sprite.charAt(0)=='b' && fNew == sprite.frame) eval(sprite.value);
      if (fNew > tmLn.lastFrame) tmLn.ID = 0;
  } }
}

n = (document.layers) ? 1:0
ie = (document.all) ? 1:0

// Scroll Bar Setup Variables
        scrollLeft = 18
        scrollTop = 45
        scrollNestLeft = 0              // left position of parent layer, 0 if none
        scrollNestTop = 0               // top position of parent layer 0 if none
        scrollWidth = 439
        scrollHeight = 117
        scrollBarWidth = 18
        scrollBoxHeight = 18
        scrollArrowHeight = 0
        scrollMarginLeft = 10
        scrollMarginRight = 10
        scrollMarginTop = 10
        scrollMarginBottom = 10
        scrollBorder = 0    // width of the border, set to 0 for no border
        scrollBorderColor = "#F06B00"
        scrollBarColor = "#F06B00"
        scrollBoxColor = "none"   // use "none" for transparent
        scrollArrowColor = "#F06B00"
        scrollTextBGColor = "#F06B00"
        scrollFirstPage = "text1.html"

        // Scroll Bar Miscellaneous Variables
        scrollLoaded = 0
        scrollActive = 0
        scrollArrowActive = 0
        scrollDownActive = 0
        scrollYold = 0
        scrollClickY = 0
        scrollBarHeight = scrollHeight-2*scrollBorder-scrollBoxHeight-scrollArrowHeight

function init() {
        // no frameref in scrolltext anymore
        scrolltext = new dynLayer("scrollTextDiv","scrollWindow.document.scrollTextWindow")
        scrollbox = new dynLayer("scrollBoxDiv","scrollWindow.document.scrollBar")
        scrollFactor = -(scrolltext.height+scrollMarginTop+scrollMarginBottom-scrollHeight+2*scrollBorder)/(scrollBarHeight-scrollArrowHeight)
        scrollLoaded = 1
        
        document.onmousedown = mouseDown
        document.onmousemove = mouseMove
        document.onmouseup = mouseUp
        if (n) document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP)
}

function mouseDown(e) {
        if ((n && e.which == 1) || ie) {
                if (n) {var x=e.pageX; var y=e.pageY}
                if (ie) {var x=event.x; var y=event.y}
                scrollMouseDown(x,y)
        }
}

function mouseMove(e) {
        if (n) {var x=e.pageX; var y=e.pageY}
        if (ie) {var x=event.x; var y=event.y}
        if (scrollLoaded && scrollActive) {
                scrollMouseMove(x,y)
        }
        if (scrollActive || scrollArrowActive) return false
}

function mouseUp(e) {
        scrollActive = 0
        scrollArrowActive = 0
        scrollDownActive = 0
}

function scrollMouseDown(x,y) {
        if (scrollLoaded && scrollFactor<0 && x>=scrollLeft+scrollNestLeft+scrollWidth-scrollBarWidth-scrollBorder && x<(scrollLeft+scrollNestLeft)+scrollWidth-scrollBorder && y>=(scrollTop+scrollNestTop)+scrollBorder && y<(scrollTop+scrollNestTop)+scrollHeight-scrollBorder) {
                if (y>=scrollTop+scrollNestTop+scrollBorder+scrollbox.y && y<(scrollTop+scrollNestTop)+scrollBorder+scrollBoxHeight+scrollbox.y) {  // scrollbox
                        scrollClickY = y-scrollbox.y
                        scrollYold = y
                        scrollActive = 1
                }                       
                else if (y<scrollTop+scrollNestTop+scrollBorder+scrollArrowHeight) {  // up arrow
                        scrollArrowActive = 1
                        scrollArrowDir = 1
                        scrollArrowSlide()
                }
                else if (y>=scrollTop+scrollNestTop+scrollHeight-scrollBorder-scrollArrowHeight) {  // down arrow
                        scrollArrowActive = 1
                        scrollArrowDir = -1
                        scrollArrowSlide()
                }
                else {
                        if (y<=scrollTop+scrollNestTop+scrollBorder+scrollArrowHeight+scrollBoxHeight/2) {  // jump top
                                scrollbox.moveTo(0,scrollArrowHeight)
                        }
                        else if (y>scrollTop+scrollNestTop+scrollHeight-scrollBorder-scrollArrowHeight-scrollBoxHeight/2) {  // jump bottom
                                scrollbox.moveTo(0,scrollBarHeight)
                        }
                        else { // jump middle
                                scrollbox.moveTo(0,y-scrollTop-scrollNestTop-scrollBorder-scrollBoxHeight/2)
                        }
                        scrolltext.moveTo(scrolltext.x,scrollFactor*(scrollbox.y-scrollArrowHeight)+scrollMarginTop)
                        scrollClickY = y-scrollbox.y
                        scrollYold = y
                        scrollActive = 1
                }
        }
}

function scrollMouseMove(x,y) {
        var diff = y-scrollYold
        if ((scrollbox.y>scrollArrowHeight && scrollbox.y<scrollBarHeight) || (scrollbox.y==scrollArrowHeight && diff>=0) || (scrollbox.y==scrollBarHeight && diff<=0)) {
                if ((scrollbox.y>scrollArrowHeight && scrollbox.y+diff<scrollArrowHeight) || (scrollbox.y<scrollBarHeight && scrollbox.y+diff>scrollBarHeight)) {
                        if (scrollbox.y+diff<scrollArrowHeight) scrollbox.moveTo(0,scrollArrowHeight)
                        else if (scrollbox.y+diff>scrollBarHeight) scrollbox.moveTo(0,scrollBarHeight)
                        scrollYold = scrollbox.y+scrollClickY
                }
                else {
                        scrollbox.moveTo(0,y-scrollClickY)
                        scrollYold = y
                }
                scrolltext.moveTo(scrolltext.x,scrollFactor*(scrollbox.y-scrollArrowHeight)+scrollMarginTop)
        }
}

function scrollArrowSlide() {
        if (scrollArrowActive) {
                if ((scrollArrowDir==1 && scrolltext.y<scrollMarginTop-5) || (scrollArrowDir==-1 && scrolltext.y>-(scrolltext.height+2*scrollBorder+scrollMarginBottom-scrollHeight-5))) {
                        scrolltext.moveBy(0,scrollArrowDir*5)
                        scrollbox.moveTo(0,(scrolltext.y-scrollMarginTop)/scrollFactor+scrollArrowHeight)
                        setTimeout("scrollArrowSlide()",20)
                }
                else {
                        if (scrollArrowDir==1) scrolltext.moveTo(scrolltext.x,scrollMarginTop)
                        else if (scrollArrowDir==-1) scrolltext.moveTo(scrolltext.x,-(scrolltext.height+2*scrollBorder+scrollMarginBottom-scrollHeight))
                        scrollbox.moveTo(0,(scrolltext.y-scrollMarginTop)/scrollFactor+scrollArrowHeight)
                }
        }
}

// Dynamic Layer Object with width and height and frameref (for IE)
function dynLayer(id,nestref,frameref) {
        if (n) {
                if (nestref) {
                        this.css = eval("document." + nestref + ".document." + id)
                        this.ref = eval("document." + nestref + ".document." + id + ".document")
                }
                else {
                        this.css = document.layers[id]
                        this.ref = document.layers[id].document
                }
                this.x = this.css.left
                this.y = this.css.top
                this.width = this.ref.width
                this.height = this.ref.height
        }
        else if (ie) {
                if (frameref) {
                        this.css = parent.frames[frameref].document.all[id].style
                        this.ref = parent.frames[frameref].document
                }
                else {
                        this.css = document.all[id].style
                        this.ref = document
                }
                this.x = this.css.pixelLeft
                this.y = this.css.pixelTop
                this.width = this.ref.all[id].offsetWidth
                this.height = this.ref.all[id].offsetHeight
        }
        this.obj = id + "Object"
        eval(this.obj + "=this")
        this.moveBy = dynLayerMoveBy
        this.moveTo = dynLayerMoveTo
        this.show = dynLayerShow
        this.hide = dynLayerHide
}
function dynLayerMoveBy(x,y) {
        this.x += x
        this.css.left = this.x
        this.y += y
        this.css.top = this.y
}
function dynLayerMoveTo(x,y) {
        this.x = x
        this.css.left = this.x
        this.y = y
        this.css.top = this.y
}
function dynLayerShow() {
        if (n) this.css.visibility = "show"
        else if (ie) this.css.visibility = "visible"
}
function dynLayerHide() {
        if (n) this.css.visibility = "hide"
        else if (ie) this.css.visibility = "hidden"
}

function MM_timelineGoto(tmLnName, fNew, numGotos) { //v1.2
  //Copyright 1997 Macromedia, Inc. All rights reserved.
  var i,j,tmLn,props,keyFrm,sprite,numKeyFr,firstKeyFr,lastKeyFr,propNum,theObj;
  if (document.MM_Time == null) MM_initTimelines(); //if *very* 1st time
  tmLn = document.MM_Time[tmLnName];
  if (numGotos != null)
    if (tmLn.gotoCount == null) tmLn.gotoCount = 1;
    else if (tmLn.gotoCount++ >= numGotos) {tmLn.gotoCount=0; return}
  jmpFwd = (fNew > tmLn.curFrame);
  for (i = 0; i < tmLn.length; i++) {
    sprite = (jmpFwd)? tmLn[i] : tmLn[(tmLn.length-1)-i]; //count bkwds if jumping back
    if (sprite.charAt(0) == "s") {
      numKeyFr = sprite.keyFrames.length;
      firstKeyFr = sprite.keyFrames[0];
      lastKeyFr = sprite.keyFrames[numKeyFr - 1];
      if ((jmpFwd && fNew<firstKeyFr) || (!jmpFwd && lastKeyFr<fNew)) continue; //skip if untouchd
      for (keyFrm=1; keyFrm<numKeyFr && fNew>=sprite.keyFrames[keyFrm]; keyFrm++);
      for (j=0; j<sprite.values.length; j++) {
        props = sprite.values[j];
        if (numKeyFr == props.length) propNum = keyFrm-1 //keyframes only
        else propNum = Math.min(Math.max(0,fNew-firstKeyFr),props.length-1); //or keep in legal range
        if (sprite.obj != null) {
          if (props.prop2 == null) sprite.obj[props.prop] = props[propNum];
          else        sprite.obj[props.prop2][props.prop] = props[propNum];
  } } } }
  tmLn.curFrame = fNew;
  if (tmLn.ID == 0) eval('MM_timelinePlay(tmLnName)');
}

function MM_timelineStop(tmLnName) { //v1.2
  //Copyright 1997 Macromedia, Inc. All rights reserved.
  if (document.MM_Time == null) MM_initTimelines(); //if *very* 1st time
  if (tmLnName == null)  //stop all
    for (var i=0; i<document.MM_Time.length; i++) document.MM_Time[i].ID = null;
  else document.MM_Time[tmLnName].ID = null; //stop one
}

function MM_popupMsg(theMsg) { //v1.2
  alert(theMsg);
}

