export const moveSetData = (type) => {
    const moveSet = []
    switch(type){
        case 'gs':
            makeNewRow(moveSet, 'Overhead Slash', 48, 1, 1);
            makeNewRow(moveSet, 'Side Blow', 16, 1, 1);
            makeNewRow(moveSet, 'Charged Slash Lv1', 48, 1, 1);
            makeNewRow(moveSet, 'Charged Slash Lv2', 77, 1.3, 1.3);
            makeNewRow(moveSet, 'Charged Slash Lv3', 110, 1.5, 1.5);
            makeNewRow(moveSet, 'Strong Charged Slash Lv1', 82, 1.4, 1.4);
            makeNewRow(moveSet, 'Strong Charged Slash Lv2', 111, 1.5, 1.5);
            makeNewRow(moveSet, 'Strong Charged Slash Lv3', 131, 1.7, 1.7);
            makeNewRow(moveSet, 'Strong Wide Slash Lv1', 59, 1, 1);
            makeNewRow(moveSet, 'Strong Wide Slash Lv2', 66, 1.3, 1.3);
            makeNewRow(moveSet, 'Strong Wide Slash Lv3', 78, 1.5, 1.5);
            makeNewRow(moveSet, 'True Charge Slash Lv1 1st hit', 15, 1, 1);
            makeNewRow(moveSet, 'True Charge Slash Lv2 1st hit', 20, 1, 1);
            makeNewRow(moveSet, 'True Charge Slash Lv3 1st hit', 22, 1, 1);
            makeNewRow(moveSet, 'True Charge Slash Lv1 2nd hit', 120, 1.4, 1.4);
            makeNewRow(moveSet, 'True Charge Slash Lv2 2nd hit', 175, 1.5, 1.5);
            makeNewRow(moveSet, 'True Charge Slash Lv3 2nd hit', 211, 1.7, 1.7);
            makeNewRow(moveSet, 'Power True Charge Slash Lv1 2nd hit', 144, 1.4, 1.4);
            makeNewRow(moveSet, 'Power True Charge Slash Lv2 2nd hit', 210, 1.5, 1.5);
            makeNewRow(moveSet, 'Power True Charge Slash Lv3 2nd hit', 264, 1.8, 1.8);
            makeNewRow(moveSet, 'Kick', 5, 0, 0);
            makeNewRow(moveSet, 'Tackle Lv1', 26, 0, 0);
            makeNewRow(moveSet, 'Tackle Lv2', 35, 0, 0);
            makeNewRow(moveSet, 'Tackle Lv3', 48, 0, 0);
            makeNewRow(moveSet, 'Wide Slash', 26, 1, 1);
            makeNewRow(moveSet, 'Rising Slash', 38, 1, 1);
            makeNewRow(moveSet, 'Side Blow (v2)', 18, 1, 1);
            makeNewRow(moveSet, 'Wide Slash (v2)', 29, 1, 1);
            makeNewRow(moveSet, 'Rising Slash', 41, 1, 1);
            makeNewRow(moveSet, 'Jumping Wide Slash Lv1', 75, 2.2, 2.2);
            makeNewRow(moveSet, 'Jumping Wide Slash Lv2', 96, 3.15, 3.15);
            makeNewRow(moveSet, 'Jumping Wide Slash Lv3', 118, 3.5, 3.5);
            makeNewRow(moveSet, 'Mid-Air Charged Slash Lv1', 58, 1, 1);
            makeNewRow(moveSet, 'Mid-Air Charged Slash Lv2', 69, 1.1, 1.1);
            makeNewRow(moveSet, 'Mid-Air Charged Slash Lv3', 87, 1.2, 1.2);
            makeNewRow(moveSet, 'Charged Rising Slash Lv1', 48, 1, 1);
            makeNewRow(moveSet, 'Charged Rising Slash Lv2', 72, 1.3, 1.3);
            makeNewRow(moveSet, 'Charged Rising Slash Lv3', 98, 1.5, 1.5);
            makeNewRow(moveSet, 'Plunging Thrust Lv1', 16, 0.2, 0.2);
            makeNewRow(moveSet, 'Plunging Thrust Lv2', 22, 0.25, 0.25);
            makeNewRow(moveSet, 'Plunging Thrust Lv3', 27, 0.3, 0.3);
            makeNewRow(moveSet, '[Clutching] Weapon Attack 1st Hit', 48, 1, 1);
            makeNewRow(moveSet, '[Clutching] Weapon Attack 2nd Hit', 6, 1, 1);
            makeNewRow(moveSet, '[Clutching] Weapon Attack Repeated', 6, 0.5, 0.5);
            makeNewRow(moveSet, '[Clutching] Weapon Attack Final Hit', 60, 1, 1);
            makeNewRow(moveSet, '[Mounting] Charged Slash Lv1 1st Hit', 100, 1, 1);
            makeNewRow(moveSet, '[Mounting] Charged Slash Lv2 1st Hit', 122, 1.3, 1.3);
            makeNewRow(moveSet, '[Mounting] Charged Slash Lv3 1st Hit', 139, 1.5, 1.5);
            makeNewRow(moveSet, '[Mounting] Charged Slash Lv1 2nd Hit', 58, 1, 1);
            makeNewRow(moveSet, '[Mounting] Charged Slash Lv2 2nd Hit', 72, 1.3, 1.3);
            makeNewRow(moveSet, '[Mounting] Charged Slash Lv3 2nd Hit', 89, 1.5, 1.5);
            return moveSet;
        case 'sns':
            return moveSet;
        case 'db':
            makeNewRow(moveSet, 'Double Slash L', 8, 0.6, 0.4);
            makeNewRow(moveSet, 'Double Slash R', 10, 0.6, 0.4); 
            makeNewRow(moveSet, 'Double Slash Return Stroke R', 9, 0.6, 0.4); 
            makeNewRow(moveSet, 'Double Slash Return Stroke L', 10, 0.6, 0.4);   
            return moveSet;
        case 'ls':
            makeNewRow(moveSet, 'Step Slash', 24, 1, 1);
            makeNewRow(moveSet, 'Overhead Slash', 21, 1, 1);
            makeNewRow(moveSet, 'Thrust', 12, 1, 1);
            makeNewRow(moveSet, 'Rising Slash', 18, 1, 1);
            makeNewRow(moveSet, 'Fade Slash', 22, 1, 1);
            makeNewRow(moveSet, 'Lateral Fade Slash', 22, 1, 1);
            makeNewRow(moveSet, 'Spirit Jumping Slash', 28, 1, 1);
            makeNewRow(moveSet, 'Spirit Blade 1', 26, 1, 1);
            makeNewRow(moveSet, 'Spirit Blade 2', 30, 1, 1);
            makeNewRow(moveSet, 'Spirit Blade 3(1)', 14, 1, 1);
            makeNewRow(moveSet, 'Spirit Blade 3(2)', 19, 1, 1);
            makeNewRow(moveSet, 'Spirit Blade 3(3)', 34, 1, 1);
            makeNewRow(moveSet, 'Spirit Roundslash', 38, 1, 1);
            makeNewRow(moveSet, 'Foresight Slash', 26, 1, 1);
            makeNewRow(moveSet, 'Spirit Thrust', 26, 1, 1);
            makeNewRow(moveSet, 'Spirit Helm Breaker (White Guage) x 7', 10, 0.3, 0.3);
            makeNewRow(moveSet, 'Spirit Helm Breaker (Yellow Guage) x 7', 15, 0.3, 0.3);
            makeNewRow(moveSet, 'Spirit Helm Breaker (Red Guage) x 7', 25, 0.3, 0.3);
            makeNewRow(moveSet, 'Iai Slash 1', 18, 1, 1);
            makeNewRow(moveSet, 'Iai Slash 2', 13, 1, 1);
            makeNewRow(moveSet, 'Iai Spirit Slash (No Gauge)', 17, 1, 1);
            makeNewRow(moveSet, 'Iai Spirit Slash(1) (White Gauge)', 19, 1, 1);
            makeNewRow(moveSet, 'Iai Spirit Slash(2) (White Gauge)', 55, 1, 1);
            makeNewRow(moveSet, 'Iai Spirit Slash(1) (Yellow Gauge)', 31, 1, 1);
            makeNewRow(moveSet, 'Iai Spirit Slash(2) (Yellow Gauge)', 72, 1, 1);
            makeNewRow(moveSet, 'Iai Spirit Slash(1) (Red Gauge)', 39, 1, 1);
            makeNewRow(moveSet, 'Iai Spirit Slash(2) (Red Gauge)', 86, 1, 1);
            makeNewRow(moveSet, 'Jumping Slash', 26, 1, 1);
            makeNewRow(moveSet, 'Jumping Spirit Blade', 30, 1, 1);
            makeNewRow(moveSet, 'Jumping Spirit Blade 2/3 (1st Hit)', 12, 1, 1);
            makeNewRow(moveSet, 'Jumping Spirit Blade 2/3 (2nd Hit)', 36, 1, 1);
            makeNewRow(moveSet, 'Jumping Spirit Blade 3 (3rd Hit)', 38, 1, 1);
            makeNewRow(moveSet, 'Jumping Rising Slash', 20, 1, 1);
            makeNewRow(moveSet, 'Aerial Draw Spirit Blade', 48, 1, 1);
            makeNewRow(moveSet, 'Clutching Weapon Attack (1)', 15, 1, 1);
            makeNewRow(moveSet, 'Clutching Weapon Attack (R)', 6, 0.2, 0.2);
            makeNewRow(moveSet, 'Mounting Spirit Storm 1', 16, 1, 1);
            makeNewRow(moveSet, 'Mounting Spirit Storm 2', 12, 1, 1);
            makeNewRow(moveSet, 'Mounting Spirit Storm 3', 14, 1, 1);
            makeNewRow(moveSet, 'Mounting Spirit Storm Finisher', 26, 1, 1);
            makeNewRow(moveSet, 'Mounting (Head) Spirit Storm Finisher (1)', 15, 1, 1);
            makeNewRow(moveSet, 'Mounting (Head) Spirit Storm Finisher (2)', 34, 1, 1);
            return moveSet;
        case 'ha':
            return moveSet;
        case 'hh':
            return moveSet;
        case 'la':
            return moveSet;
        case 'gl':
            return moveSet;
        case 'sa':
            return moveSet;
        case 'cb':
            return moveSet;
        case 'ig':
            return moveSet;
        case 'bow':
            return moveSet;
        case 'hbg':
            return moveSet;
        case 'lbg':
            return moveSet;
        default:
            return moveSet;
    }
}

function makeNewRow(moveSet, moveName, mv, eleMod, sMod) {
    let row = {
        name: moveName,
        motionValue: mv,
        elementMod: eleMod,
        statusMod: sMod
    };
    moveSet.push(row);
}
/*iceborne
https://docs.google.com/spreadsheets/d/e/2PACX-1vTEYb4wGpijtIpFVopiYl1V83m48d7g1AHmTwOBKJ5RXdlz1sfxCyEmnhbgHLWQsGiXnodyBsUlPzc3/pubhtml# */
// wilds ds
// https://docs.google.com/spreadsheets/d/1ksdXimFGQerrKYkF69dFVuvdUUDT-Ew919nsbK5ymj4/edit?gid=1166275998#gid=1166275998