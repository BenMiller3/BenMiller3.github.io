//Precode used to load images varo javaScript
/* @pjs preload="field.png,Germany.png,Italy.png,Spain.png,China.png,Canada.png,UK.png,Russia.png,USA.png,MainMenu.png,selCount.png,powBlock.png,ChinaBig.png,switzerland.png,Australia.png,ChinaSmall.png,CanadaSmall.png,UKSmall.png,USASmall.png,GermanySmall.png,ItalySmall.png,SpainSmall.png,RussiaSmall.png,wallOfSnow.png,ironCurtain.png,wallOfSnowCPU.png,menu.png,credits.png,bracket.png,CanadaIcon.png,ChinaIcon.png,GermanyIcon.png,ItalyIcon.png,RussiaIcon.png,SpainIcon.png,UKIcon.png,USAIcon.png,instructions.png,achievements.png,cdChina.png,cdCanada.png,cdItaly.png,cdGermany.png,cdRussia.png,cdUK.png,cdUSA.png,cdSpain.png,shop.png,stats.png,saying1.png,bracket2.png,world.png,saying2.png,saying3.png,saying4.png,saying5.png,saying6.png,canadaWin.png,ChinaWin.png,GermanyWin.png,ItalyWin.png,SpainWin.png,RussiaWin.png,UKWin.png,USAWin.png,arrowKeys.png,defaulted.png,unknown.png,BBBmakeitrain.png,BBBsmartmove.png,BBBgoalhero.png,BBBfathertime.png,BBBblowout.png,BBBoffensivethreat.png,BBBreadcredits.png,achievements2.png,BBBworldchamp.png,BBBdiversityday.png,BBBflawless.png,BBBwinthreeworlds.png,BBBclickclickboom.png,BBBdvsg.png,BBBsmallbutmighty.png,BBBonebeatstwo.png,BBBnohelpneeded.png,ggmakeitrain.png,ggsmartmove.png,gggoalmaster.png,ggfathertime.png,ggonesided.png,ggoffensivethreat.png,ggrealmvp.png,ggworldchampion.png,ggdiversityday.png,ggflawless.png,ggticktickboom.png,ggonebeatstwo.png,ggdvsg.png,ggsmallbutmighty.png,ggnohelpneeded.png,ggtrifecta.png,menu2.png,spacebar.png,saying7.png,saying8.png,ggrealmvp2.png,ggtrifecta2.png,advice1.png,selcount2.png,advice2.png,advice3.png,advice4.png,advice5.png,advice6.png,advice7.png,advice8.png,advice9.png,advice10.png,advice11.png,advice12.png,advice13.png,advice14.png,advice15.png,advice16.png,selCount3.png,field2.png,field3.png,field4.png,surprise.png,brazil.png,brazilsmall.png,france.png,francesmall.png,portugal.png,portugalsmall.png,argentina.png,argentinasmall.png,introScreen.jpg,bullet.png,cdArgentina.png,cdBrazil.png,cdFrance.png,cdPortugal.png,ArgentinaIcon.png,BrazilIcon.png,FranceIcon.png,PortugalIcon.png,ArgentinaWin.png,BrazilWin.png,FranceWin.png,PortugalWin.png"; */

//Declare Images
var field;
var Germany, Italy, USA, China, Spain, UK, Russia, Canada, switzerland;
var ChinaBig, Australia, wallOfSnow, ironCurtain, wallOfSnowCPU;
var CanadaSmall, ChinaSmall, GermanySmall, ItalySmall, RussiaSmall, SpainSmall, UKSmall, USASmall;
var CanadaIcon, ChinaIcon, GermanyIcon, ItalyIcon;
var RussiaIcon, SpainIcon, UKIcon, USAIcon;
var mainMenu, selCount, pauseMenu, pauseMenu2, bracket;
var powBlock, credits, instructions, acheivements;
var cdCanada, cdChina, cdGermany, cdItaly, cdRussia, cdSpain, cdUK, cdUSA;
var saying1, saying2, saying3, saying7, saying8;
var bracket2, World, spacebar, shop, stats;
var CanadaWin, ChinaWin, GermanyWin, ItalyWin, SpainWin, RussiaWin, UKWin, USAWin;
var arrowKeys, defaulted;
var unknown, achievements2, achievements;
var BBBmakeitrain, BBBsmartmove, BBBgoalhero, BBBfathertime, BBBblowout, BBBoffensivethreat;
var BBBreadcredits, BBBworldchamp, BBBdiversityday, BBBflawless, BBBwinthreeworlds, BBBclickclickboom;
var BBBdvsg, BBBsmallbutmighty, BBBonebeatstwo, BBBnohelpneeded;
var ggmakeitrain, ggsmartmove, gggoalmaster, ggfathertime, ggonesided, ggoffensivethreat, ggrealmvp, ggworldchampion;
var ggdiversityday, ggflawless, ggticktickboom, ggonebeatstwo, ggdvsg, ggsmallbutmighty, ggnohelpneeded, ggtrifecta;
var ggrealmvp2, ggtrifecta2;
var advice1, advice2, advice3, advice4, advice5, advice6, advice7, advice8;
var saying4, saying5, saying6;
var advice9, advice10, advice11, advice12, advice13, advice14, advice15, advice16;
var selcount2, selcount3, field2, field3, field4, surprise;
var Brazil, BrazilSmall, France, FranceSmall, Portugal, PortugalSmall, Argentina, ArgentinaSmall;
var introScreen, bullet, cdArgentina, cdBrazil, cdFrance, cdPortugal;
var ArgentinaIcon, BrazilIcon, FranceIcon, PortugalIcon;
var ArgentinaWin, BrazilWin, FranceWin, PortugalWin;

// Declare Music
// SOUNDS
var ballHitSound;
var ballHitPaddleSound;
var goalScoredSound;
var powerUpSound;
var menuSound; // wooshSound.wav
var gameOverWinSound;
var itemBoughtSound;
// SONGS
var normalGameMusic;
var mainMenuMusic;

// global variables
var lifeGoals = 0;
var lifeLowes = 0;
var lifePowers = 0;
var lifeWins = 0;
var lifeTies = 0;
var lifeLosses = 0;
var lifeChamps = 0;
var lifeAchievements = 0;

// achievements
var dvsg = false;
var makeitrain = false;
var blowout = false;
var goalmaster = false;
var readcredits = false;
var fathertime = false;
var worldchamp = false;
var wvarhreeworlds = false;
var diversityday = false;
var onebeatstwo = false;
var smallbutmighty = false;
var trifecta = false;
var nohelpneeded = false;
var flawless = false;
var offensivethreat = false;
var smartmove = false;

//for dd
var playaschina = false;
var playascanada = false;
var playasitaly = false;
var playasspain = false;
var playasgermany = false;
var playasusa = false;
var playasuk = false;
var playasrussia = false;

//One time fix win/loss/tie
var winorlose = false;

//Testing tings
var serbia = false;
var serbia2 = false;
var slovakia = 0;
var bingoPlayers = true;
var pos = 0;
var roundPlay = 1;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var selectOnce = true;
var finalist = "";
var selectTwice = true;
var selectThird = true;
var selectFourth = true;
var selectLast = true;



//In GAME TUTORIAL :)
var maceroni = false;
var nines = true;

//nahh
var saotome = 0;

//CASH MONEY + SHOP
var cash = 0;
var detract = 0;
var CStrength = 1;
var PStrength = 1;
var faster = 0;

//Fugazzi
var indonesia = false;

// Remove beginning varros
var noHelp = false;

var countries = [
 "Canada",
 "China",
 "Germany",
 "Italy",
 "Russia",
 "Spain",
 "UK",
 "USA"
];
var countryMix = [
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 ""
];

//To sort and shuffle countries for tourney bracket
var sortList = true;
var CanadaX;
var ChinaX;
var GermanyX;
var ItalyX;
var RussiaX;
var SpainX;
var UKX;
var USAX;

//Arbitrary number
var x = 0;
var y = 7.99;

//Which country is being described: 1: Canada 2: China 2:Italy...8:USA
var countryDescribe = 0;

//Used for turning game off and on
var game = false;
var menu = true;
var quickGame = false;
var tourney = false;
var tourneyBegin = false;

//TIMES ON WHEN THE BOXES ARE RELEASED
var box1 = 0;
var box2 = 0;

//Test for flawlessness
var isitflawed = false;

//Menu Fugazziness
var badBOI = 0;

//Deciding who hit the ball so who receives the power up
// for whoHit: true means the player hit it, false means the opponent hit it.
var whoHit = true;
var power = true;
var powerActivate = false;
var powOnce = true;
var powTwice = true;
var ItalyPower = false;
var SpainPower = false;
var GermanyPower = false;
var CanadaPower = false;
var RussiaPower = false;

//Used for switching screens
var screen = 0;
//FLAWLESSLY
var screenNum = 1;
//TRIFECTA
var baseScore = 0;
var base2Score = 0;

//Used for smooth keyboard movements
var up = 0;
var down = 0;
var up2 = 0;
var down2 = 0;
var speeder = 7;

//Computer Variables
var cpuSpeed = 7;

//Power up Box position (begins off screen)
var powerX = -150;
var powerY = -150;

//END POWERUPS
var moneyTime = 0;
var stopTime = 0;
var powerUP = false;

//Achievements Counter
var abc = false;
var def = false;
var ghi = false;
var jkl = false;
var mno = false;
var pqr = false;
var stu = false;
var vwx = false;
var yza = false;
var bcd = false;
var efg = false;
var hij = false;
var klm = false;
var nop = false;
var qrs = false;
var tuv = false;

//Smooth mouse movements
var bingo = 0;

//Count how much time has elapsed since the game has been paused, and minus that from 2:00 when the game is unpaused.
var timePass = 0;

//POWERUP Variables
var target = 0;
var target2 = 250;
var target3 = 250;
var targetUSER = 0;

//Pause the Ball
var targetBallX = 0;
var targetBallY = 0;
var targetPaddleLeft = 0;
var targetPaddleRight = 0;

//CPU POWER UP VARIABLES
var ItalyPowerCPU = false;
var SpainPowerCPU = false;
var GermanyPowerCPU = false;
var CanadaPowerCPU = false;

//To reset timer at beginning of games
var timex = 0;

//Randomly pick CPU country
var chooser = 0;

//Ball Position
var ballX = 325;
var ballY = 250;

//CHOSEN COUNTRY
var user = "";
var cpuUser = "";

//Throughout Gameplay
var ballHits = 1;

//Physics
var speed = 3;
var ballDirection = true;
var ballD = 0;

//Score
var playerScore = 0;
var CPUScore = 0;

//Location of the players
var playerY = 250;
var CPUY = 250;
var HelperY = 250;
//Positive when unpaused, negative when game is paused
var pause = 1;

//FRENCH POWERS!
var FrancePower = false;
var ballY2 = ballY - 20;
var ballY3 = ballY + 20;
var ballD2 = ballD;
var ballD3 = ballD;

//Portugal Power
var PortugalPower = false;
var bulletX = 0;
var bulletY = playerY;
var shot = false;

//Argentina Power
var ArgentinaPower = false;

//Brazilian Powers! Magnetism
var BrazilPower = false;

//FOR SECRETS AND BONUSES

var secretSel = 0;
var fieldOrd = 0;
var colourOrd = 0;

//Introductory Screen
var playIntro = false;
var jab = 0;
var tub = 0;

// Current Menu Selection
var currentMenuSelection;

//New country tournament entry
var chubby = false;

function preload() {
    
	field = loadImage("pwt/field.png");
    Germany = loadImage("pwt/germany.png");
    Italy = loadImage("pwt/italy.png");
    Spain = loadImage("pwt/spain.png");
    USA = loadImage("pwt/usa.png");
    China = loadImage("pwt/china.png");
    UK = loadImage("pwt/uk.png");
    Russia = loadImage("pwt/russia.png");
    Canada = loadImage("pwt/canada.png");
    GermanySmall = loadImage("pwt/germanySmall.png");
    ItalySmall = loadImage("pwt/italySmall.png");
    SpainSmall = loadImage("pwt/spainSmall.png");
    USASmall = loadImage("pwt/usaSmall.png");
    ChinaSmall = loadImage("pwt/chinaSmall.png");
    UKSmall = loadImage("pwt/ukSmall.png");
    RussiaSmall = loadImage("pwt/russiaSmall.png");
    CanadaSmall = loadImage("pwt/canadaSmall.png");
    mainMenu = loadImage("pwt/MainMenu.png");
    selCount = loadImage("pwt/selCount.png");
    switzerland = loadImage("pwt/switzerland.png");
    powBlock = loadImage("pwt/powBlock.png");
    ChinaBig = loadImage("pwt/chinaBig.png");
    Australia = loadImage("pwt/australia.png");
    wallOfSnow = loadImage("pwt/wallOfSnow.png");
    ironCurtain = loadImage("pwt/ironCurtain.png");
    wallOfSnowCPU = loadImage("pwt/wallOfSnowCPU.png");
    pauseMenu = loadImage("pwt/menu.png");
    pauseMenu2 = loadImage("pwt/menu2.png");
    credits = loadImage("pwt/credits.png");
    bracket = loadImage("pwt/bracket.png");
    instructions = loadImage("pwt/instructions.png");
    achievements = loadImage("pwt/achievements.png");
    CanadaIcon = loadImage("pwt/canadaIcon.png");
    ChinaIcon = loadImage("pwt/chinaIcon.png");
    GermanyIcon = loadImage("pwt/germanyIcon.png");
    ItalyIcon = loadImage("pwt/italyIcon.png");
    RussiaIcon = loadImage("pwt/russiaIcon.png");
    SpainIcon = loadImage("pwt/spainIcon.png");
    UKIcon = loadImage("pwt/ukIcon.png");
    USAIcon = loadImage("pwt/usaIcon.png");
    cdCanada = loadImage("pwt/cdCanada.png");
    cdChina = loadImage("pwt/cdChina.png");
    cdGermany = loadImage("pwt/cdGermany.png");
    cdItaly = loadImage("pwt/cdItaly.png");
    cdSpain = loadImage("pwt/cdSpain.png");
    cdRussia = loadImage("pwt/cdRussia.png");
    cdUK = loadImage("pwt/cdUK.png");
    cdUSA = loadImage("pwt/cdUSA.png");
    shop = loadImage("pwt/shop.png");
    stats = loadImage("pwt/stats.png");
    saying1 = loadImage("pwt/saying1.png");
    saying2 = loadImage("pwt/saying2.png");
    bracket2 = loadImage("pwt/bracket2.png");
    World = loadImage("pwt/world.png");
    saying3 = loadImage("pwt/saying3.png");
    saying4 = loadImage("pwt/saying4.png");
    saying5 = loadImage("pwt/saying5.png");
    saying6 = loadImage("pwt/saying6.png");
    CanadaWin = loadImage("pwt/canadaWin.png");
    ChinaWin = loadImage("pwt/ChinaWin.png");
    GermanyWin = loadImage("pwt/GermanyWin.png");
    ItalyWin = loadImage("pwt/ItalyWin.png");
    RussiaWin = loadImage("pwt/RussiaWin.png");
    SpainWin = loadImage("pwt/SpainWin.png");
    UKWin = loadImage("pwt/UKWin.png");
    USAWin = loadImage("pwt/USAWin.png");
    arrowKeys = loadImage("pwt/arrowKeys.png");
    defaulted = loadImage("pwt/defaulted.png");
    unknown = loadImage("pwt/unknown.png");
    BBBnohelpneeded = loadImage("pwt/BBBnohelpneeded.png");
    field2 = loadImage("pwt/field2.png");
    field3 = loadImage("pwt/field3.png");
    field4 = loadImage("pwt/field4.png");
    BBBmakeitrain = loadImage("pwt/BBBmakeitrain.png");
    BBBsmartmove = loadImage("pwt/BBBsmartmove.png");
    BBBgoalhero = loadImage("pwt/BBBgoalhero.png");
    BBBfathertime = loadImage("pwt/BBBfathertime.png");
    BBBblowout = loadImage("pwt/BBBblowout.png");
    BBBoffensivethreat = loadImage("pwt/BBBoffensivethreat.png");
    BBBreadcredits = loadImage("pwt/BBBreadcredits.png");
    achievements2 = loadImage("pwt/achievements2.png");
    BBBworldchamp = loadImage("pwt/BBBworldchamp.png");
    BBBdiversityday = loadImage("pwt/BBBdiversityday.png");
    BBBflawless = loadImage("pwt/BBBflawless.png");
    BBBwinthreeworlds = loadImage("pwt/BBBwinthreeworlds.png");
    BBBclickclickboom = loadImage("pwt/BBBclickclickboom.png");
    BBBdvsg = loadImage("pwt/BBBdvsg.png");
    BBBsmallbutmighty = loadImage("pwt/BBBsmallbutmighty.png");
    BBBonebeatstwo = loadImage("pwt/BBBonebeatstwo.png");
    ggmakeitrain = loadImage("pwt/ggmakeitrain.png");
    ggsmartmove = loadImage("pwt/ggsmartmove.png");
    gggoalmaster = loadImage("pwt/gggoalmaster.png");
    ggfathertime = loadImage("pwt/ggfathertime.png");
    ggonesided = loadImage("pwt/ggonesided.png");
    ggoffensivethreat = loadImage("pwt/ggoffensivethreat.png");
    ggrealmvp = loadImage("pwt/ggrealmvp.png");
    ggworldchampion = loadImage("pwt/ggworldchampion.png");
    ggdiversityday = loadImage("pwt/ggdiversityday.png");
    ggflawless = loadImage("pwt/ggflawless.png");
    ggticktickboom = loadImage("pwt/ggticktickboom.png");
    ggonebeatstwo = loadImage("pwt/ggonebeatstwo.png");
    ggdvsg = loadImage("pwt/ggdvsg.png");
    ggsmallbutmighty = loadImage("pwt/ggsmallbutmighty.png");
    ggnohelpneeded = loadImage("pwt/ggnohelpneeded.png");
    ggtrifecta = loadImage("pwt/ggtrifecta.png");
    spacebar = loadImage("pwt/spacebar.png");
    ggtrifecta2 = loadImage("pwt/ggtrifecta2.png");
    ggrealmvp2 = loadImage("pwt/ggrealmvp2.png");
    saying7 = loadImage("pwt/saying7.png");
    saying8 = loadImage("pwt/saying8.png");
    introScreen = loadImage("pwt/introScreen.jpg");
    bullet = loadImage("pwt/bullet.png");
    advice1 = loadImage("pwt/advice1.png");
    advice2 = loadImage("pwt/advice2.png");
    advice3 = loadImage("pwt/advice3.png");
    advice4 = loadImage("pwt/advice4.png");
    advice5 = loadImage("pwt/advice5.png");
    selcount2 = loadImage("pwt/selCount2.png");
    advice6 = loadImage("pwt/advice6.png");
    advice7 = loadImage("pwt/advice7.png");
    advice8 = loadImage("pwt/advice8.png");
    advice9 = loadImage("pwt/advice9.png");
    advice10 = loadImage("pwt/advice10.png");
    advice11 = loadImage("pwt/advice11.png");
    advice12 = loadImage("pwt/advice12.png");
    advice13 = loadImage("pwt/advice13.png");
    advice14 = loadImage("pwt/advice14.png");
    advice15 = loadImage("pwt/advice15.png");
    advice16 = loadImage("pwt/advice16.png");
    selcount3 = loadImage("pwt/selCount3.png");
    surprise = loadImage("pwt/surprise.png");
    Brazil = loadImage("pwt/Brazil.png");
    BrazilSmall = loadImage("pwt/BrazilSmall.png");
    France = loadImage("pwt/France.png");
    FranceSmall = loadImage("pwt/FranceSmall.png");
    Portugal = loadImage("pwt/portugal.png");
    PortugalSmall = loadImage("pwt/PortugalSmall.png");
    Argentina = loadImage("pwt/Argentina.png");
    ArgentinaSmall = loadImage("pwt/ArgentinaSmall.png");
    cdArgentina = loadImage("pwt/cdArgentina.png");
    cdBrazil = loadImage("pwt/cdBrazil.png");
    cdFrance = loadImage("pwt/cdFrance.png");
    cdPortugal = loadImage("pwt/cdPortugal.png");
    ArgentinaIcon = loadImage("pwt/ArgentinaIcon.png");
    BrazilIcon = loadImage("pwt/BrazilIcon.png");
    FranceIcon = loadImage("pwt/FranceIcon.png");
    PortugalIcon = loadImage("pwt/PortugalIcon.png");
    ArgentinaWin = loadImage("pwt/ArgentinaWin.png");
    BrazilWin = loadImage("pwt/BrazilWin.png");
    FranceWin = loadImage("pwt/FranceWin.png");
    PortugalWin = loadImage("pwt/PortugalWin.png");

    // Load music

    menuHoverSound = loadSound('pwt/menuSelect.wav'); //menuMusicLoaded);
    ballHitSound = loadSound('pwt/ballSound.wav');
    ballHitPaddleSound = loadSound('pwt/ballPaddleSound.wav');
    goalScoredSound = loadSound('pwt/applause.wav');
    powerUpSound = loadSound('pwt/powerUpSound.wav');
    menuSound = loadSound('pwt/woosh.wav'); 
    menuHoverSound = loadSound('pwt/menuSelect.wav');
    gameOverWinSound = loadSound('pwt/winSound.wav');
    itemBoughtSound = loadSound('pwt/cashSound.wav');
    

    mainMenuMusic = loadSound('pwt/mainMenuMusic.wav', menuMusicLoaded);
    //normalGameMusic = loadSound('pwt/gameMusic.mp3');
}

function menuMusicLoaded()
 {
    mainMenuMusic.loop();
    mainMenuMusic.setVolume(0.1);
    mainMenuMusic.stop();
}

function setup() {
 //load Images
 
field = loadImage("pwt/field.png");
 Germany = loadImage("pwt/germany.png");
 Italy = loadImage("pwt/italy.png");
 Spain = loadImage("pwt/spain.png");
 USA = loadImage("pwt/usa.png");
 China = loadImage("pwt/china.png");
 UK = loadImage("pwt/uk.png");
 Russia = loadImage("pwt/russia.png");
 Canada = loadImage("pwt/canada.png");
 GermanySmall = loadImage("pwt/germanySmall.png");
 ItalySmall = loadImage("pwt/italySmall.png");
 SpainSmall = loadImage("pwt/spainSmall.png");
 USASmall = loadImage("pwt/usaSmall.png");
 ChinaSmall = loadImage("pwt/chinaSmall.png");
 UKSmall = loadImage("pwt/ukSmall.png");
 RussiaSmall = loadImage("pwt/russiaSmall.png");
 CanadaSmall = loadImage("pwt/canadaSmall.png");
 mainMenu = loadImage("pwt/MainMenu.png");
 selCount = loadImage("pwt/selCount.png");
 switzerland = loadImage("pwt/switzerland.png");
 powBlock = loadImage("pwt/powBlock.png");
 ChinaBig = loadImage("pwt/chinaBig.png");
 Australia = loadImage("pwt/australia.png");
 wallOfSnow = loadImage("pwt/wallOfSnow.png");
 ironCurtain = loadImage("pwt/ironCurtain.png");
 wallOfSnowCPU = loadImage("pwt/wallOfSnowCPU.png");
 pauseMenu = loadImage("pwt/menu.png");
 pauseMenu2 = loadImage("pwt/menu2.png");
 credits = loadImage("pwt/credits.png");
 bracket = loadImage("pwt/bracket.png");
 instructions = loadImage("pwt/instructions.png");
 achievements = loadImage("pwt/achievements.png");
 CanadaIcon = loadImage("pwt/canadaIcon.png");
 ChinaIcon = loadImage("pwt/chinaIcon.png");
 GermanyIcon = loadImage("pwt/germanyIcon.png");
 ItalyIcon = loadImage("pwt/italyIcon.png");
 RussiaIcon = loadImage("pwt/russiaIcon.png");
 SpainIcon = loadImage("pwt/spainIcon.png");
 UKIcon = loadImage("pwt/ukIcon.png");
 USAIcon = loadImage("pwt/usaIcon.png");
 cdCanada = loadImage("pwt/cdCanada.png");
 cdChina = loadImage("pwt/cdChina.png");
 cdGermany = loadImage("pwt/cdGermany.png");
 cdItaly = loadImage("pwt/cdItaly.png");
 cdSpain = loadImage("pwt/cdSpain.png");
 cdRussia = loadImage("pwt/cdRussia.png");
 cdUK = loadImage("pwt/cdUK.png");
 cdUSA = loadImage("pwt/cdUSA.png");
 shop = loadImage("pwt/shop.png");
 stats = loadImage("pwt/stats.png");
 saying1 = loadImage("pwt/saying1.png");
 saying2 = loadImage("pwt/saying2.png");
 bracket2 = loadImage("pwt/bracket2.png");
 World = loadImage("pwt/world.png");
 saying3 = loadImage("pwt/saying3.png");
 saying4 = loadImage("pwt/saying4.png");
 saying5 = loadImage("pwt/saying5.png");
 saying6 = loadImage("pwt/saying6.png");
 CanadaWin = loadImage("pwt/canadaWin.png");
 ChinaWin = loadImage("pwt/ChinaWin.png");
 GermanyWin = loadImage("pwt/GermanyWin.png");
 ItalyWin = loadImage("pwt/ItalyWin.png");
 RussiaWin = loadImage("pwt/RussiaWin.png");
 SpainWin = loadImage("pwt/SpainWin.png");
 UKWin = loadImage("pwt/UKWin.png");
 USAWin = loadImage("pwt/USAWin.png");
 arrowKeys = loadImage("pwt/arrowKeys.png");
 defaulted = loadImage("pwt/defaulted.png");
 unknown = loadImage("pwt/unknown.png");
 BBBnohelpneeded = loadImage("pwt/BBBnohelpneeded.png");
 field2 = loadImage("pwt/field2.png");
 field3 = loadImage("pwt/field3.png");
 field4 = loadImage("pwt/field4.png");
 BBBmakeitrain = loadImage("pwt/BBBmakeitrain.png");
 BBBsmartmove = loadImage("pwt/BBBsmartmove.png");
 BBBgoalhero = loadImage("pwt/BBBgoalhero.png");
 BBBfathertime = loadImage("pwt/BBBfathertime.png");
 BBBblowout = loadImage("pwt/BBBblowout.png");
 BBBoffensivethreat = loadImage("pwt/BBBoffensivethreat.png");
 BBBreadcredits = loadImage("pwt/BBBreadcredits.png");
 achievements2 = loadImage("pwt/achievements2.png");
 BBBworldchamp = loadImage("pwt/BBBworldchamp.png");
 BBBdiversityday = loadImage("pwt/BBBdiversityday.png");
 BBBflawless = loadImage("pwt/BBBflawless.png");
 BBBwinthreeworlds = loadImage("pwt/BBBwinthreeworlds.png");
 BBBclickclickboom = loadImage("pwt/BBBclickclickboom.png");
 BBBdvsg = loadImage("pwt/BBBdvsg.png");
 BBBsmallbutmighty = loadImage("pwt/BBBsmallbutmighty.png");
 BBBonebeatstwo = loadImage("pwt/BBBonebeatstwo.png");
 ggmakeitrain = loadImage("pwt/ggmakeitrain.png");
 ggsmartmove = loadImage("pwt/ggsmartmove.png");
 gggoalmaster = loadImage("pwt/gggoalmaster.png");
 ggfathertime = loadImage("pwt/ggfathertime.png");
 ggonesided = loadImage("pwt/ggonesided.png");
 ggoffensivethreat = loadImage("pwt/ggoffensivethreat.png");
 ggrealmvp = loadImage("pwt/ggrealmvp.png");
 ggworldchampion = loadImage("pwt/ggworldchampion.png");
 ggdiversityday = loadImage("pwt/ggdiversityday.png");
 ggflawless = loadImage("pwt/ggflawless.png");
 ggticktickboom = loadImage("pwt/ggticktickboom.png");
 ggonebeatstwo = loadImage("pwt/ggonebeatstwo.png");
 ggdvsg = loadImage("pwt/ggdvsg.png");
 ggsmallbutmighty = loadImage("pwt/ggsmallbutmighty.png");
 ggnohelpneeded = loadImage("pwt/ggnohelpneeded.png");
 ggtrifecta = loadImage("pwt/ggtrifecta.png");
 spacebar = loadImage("pwt/spacebar.png");
 ggtrifecta2 = loadImage("pwt/ggtrifecta2.png");
 ggrealmvp2 = loadImage("pwt/ggrealmvp2.png");
 saying7 = loadImage("pwt/saying7.png");
 saying8 = loadImage("pwt/saying8.png");
 introScreen = loadImage("pwt/introScreen.jpg");
 bullet = loadImage("pwt/bullet.png");
 advice1 = loadImage("pwt/advice1.png");
 advice2 = loadImage("pwt/advice2.png");
 advice3 = loadImage("pwt/advice3.png");
 advice4 = loadImage("pwt/advice4.png");
 advice5 = loadImage("pwt/advice5.png");
 selcount2 = loadImage("pwt/selCount2.png");
 advice6 = loadImage("pwt/advice6.png");
 advice7 = loadImage("pwt/advice7.png");
 advice8 = loadImage("pwt/advice8.png");
 advice9 = loadImage("pwt/advice9.png");
 advice10 = loadImage("pwt/advice10.png");
 advice11 = loadImage("pwt/advice11.png");
 advice12 = loadImage("pwt/advice12.png");
 advice13 = loadImage("pwt/advice13.png");
 advice14 = loadImage("pwt/advice14.png");
 advice15 = loadImage("pwt/advice15.png");
 advice16 = loadImage("pwt/advice16.png");
 selcount3 = loadImage("pwt/selCount3.png");
 surprise = loadImage("pwt/surprise.png");
 Brazil = loadImage("pwt/Brazil.png");
 BrazilSmall = loadImage("pwt/BrazilSmall.png");
 France = loadImage("pwt/France.png");
 FranceSmall = loadImage("pwt/FranceSmall.png");
 Portugal = loadImage("pwt/portugal.png");
 PortugalSmall = loadImage("pwt/PortugalSmall.png");
 Argentina = loadImage("pwt/Argentina.png");
 ArgentinaSmall = loadImage("pwt/ArgentinaSmall.png");
 cdArgentina = loadImage("pwt/cdArgentina.png");
 cdBrazil = loadImage("pwt/cdBrazil.png");
 cdFrance = loadImage("pwt/cdFrance.png");
 cdPortugal = loadImage("pwt/cdPortugal.png");
 ArgentinaIcon = loadImage("pwt/ArgentinaIcon.png");
 BrazilIcon = loadImage("pwt/BrazilIcon.png");
 FranceIcon = loadImage("pwt/FranceIcon.png");
 PortugalIcon = loadImage("pwt/PortugalIcon.png");
 ArgentinaWin = loadImage("pwt/ArgentinaWin.png");
 BrazilWin = loadImage("pwt/BrazilWin.png");
 FranceWin = loadImage("pwt/FranceWin.png");
 PortugalWin = loadImage("pwt/PortugalWin.png");

 // Load music

 ballHitSound = loadSound('pwt/ballSound.wav');
 ballHitPaddleSound = loadSound('pwt/ballPaddleSound.wav');
 goalScoredSound = loadSound('pwt/applause.wav');
 powerUpSound = loadSound('pwt/powerUpSound.wav');
 menuSound = loadSound('pwt/woosh.wav'); 
 gameOverWinSound = loadSound('pwt/winSound.wav');
 itemBoughtSound = loadSound('pwt/cashSound.wav');
 menuHoverSound = loadSound('pwt/menuSelect.wav');
 
 //normalGameMusic = loadSound('pwt/gameMusic.mp3');
 mainMenuMusic = loadSound('pwt/mainMenuMusic.wav');
 
 //Set Screen createCanvas
 createCanvas(650, 500);
}

function newMenuSelection(selection)
{
    if (selection != currentMenuSelection && selection != "")
    {
        currentMenuSelection = selection;
        menuHoverSound.play();
    }
}

function draw() {


 if (screenNum == 2) {
  // Credits Screen
  
  menu = false;
  image(credits, 0, 0);
  readcredits = true;
  if (stu == false) {
   lifeAchievements += 1;
   stu = true;
   mainMenuMusic.play();
  }
 }
 if (screenNum == 7) {
  // Instructions Screen
  menu = false;
  image(instructions, 0, 0);
  smartmove = true;
  if (def == false) {
   lifeAchievements += 1;
   def = true;
  }
 }
 if (screenNum == 8) {
  // Achievements screen page 1 (initial screen)
  menu = false;
  image(achievements, 0, 0);

  // Achievement Images
  if (makeitrain) {
   image(BBBmakeitrain, 46, 106);
  } else {
   image(unknown, 46, 106);
  }

  if (smartmove) {
   image(BBBsmartmove, 185, 106);
  } else {
   image(unknown, 185, 106);
  }

  if (goalmaster) {
   image(BBBgoalhero, 323, 107);
  } else {
   image(unknown, 323, 107);
  }

  if (fathertime) {
   image(BBBfathertime, 467, 108);
  } else {
   image(unknown, 467, 108);
  }

  if (blowout) {
   image(BBBblowout, 46, 317);
  } else {
   image(unknown, 46, 317);
  }

  if (offensivethreat) {
   image(BBBoffensivethreat, 185, 317);
  } else {
   image(unknown, 185, 317);
  }

  if (readcredits) {
   image(BBBreadcredits, 323, 318);
  } else {
   image(unknown, 323, 318);
  }

  if (worldchamp) {
   image(BBBworldchamp, 467, 319);
  } else {
   image(unknown, 467, 319);
  }

  // Description image
  if (mouseX >= 46 & mouseY >= 106 & mouseX <= 149 & mouseY <= 209) {
   image(ggmakeitrain, 82, 11);
  } else if (mouseX >= 185 & mouseY >= 106 & mouseX <= 288 & mouseY <= 209) {
   image(ggsmartmove, 82, 11);
   if (smartmove) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 323 & mouseY >= 107 & mouseX <= 426 & mouseY <= 210) {
   image(gggoalmaster, 82, 11);
   if (goalmaster) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 467 & mouseY >= 108 & mouseX <= 570 & mouseY <= 211) {
   image(ggfathertime, 82, 11);
   if (fathertime) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 46 & mouseY >= 317 & mouseX <= 149 & mouseY <= 420) {
   image(ggonesided, 82, 11);
   if (blowout) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 185 & mouseY >= 317 & mouseX <= 288 & mouseY <= 420) {
   image(ggoffensivethreat, 82, 11);
   if (offensivethreat) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 323 & mouseY >= 318 & mouseX <= 426 & mouseY <= 421 & readcredits == false) {
   image(ggrealmvp, 82, 11);
  } else if (mouseX >= 323 & mouseY >= 318 & mouseX <= 426 & mouseY <= 421 & readcredits == true) {
   image(ggrealmvp2, 82, 11);
   image(surprise, 125, 53);
  } else if (mouseX >= 467 & mouseY >= 319 & mouseX <= 570 & mouseY <= 422) {
   image(ggworldchampion, 82, 11);
   if (worldchamp) {
    image(surprise, 125, 53);
   }
  }
 }

 if (screenNum == 14) {
  // Achivements screen page 2.

  menu = false;
  image(achievements2, 0, 0);

  if (diversityday) {
   image(BBBdiversityday, 46, 106);
  } else {
   image(unknown, 46, 106);
  }

  if (flawless) {
   image(BBBflawless, 185, 106);
  } else {
   image(unknown, 185, 106);
  }

  if (trifecta) {
   image(BBBclickclickboom, 323, 107);
  } else {
   image(unknown, 323, 107);
  }

  if (onebeatstwo) {
   image(BBBonebeatstwo, 467, 108);
  } else {
   image(unknown, 467, 108);
  }

  if (dvsg) {
   image(BBBdvsg, 46, 317);
  } else {
   image(unknown, 46, 317);
  }

  if (smallbutmighty) {
   image(BBBsmallbutmighty, 185, 317);
  } else {
   image(unknown, 185, 317);
  }

  if (nohelpneeded) {
   image(BBBnohelpneeded, 323, 318);
  } else {
   image(unknown, 323, 318);
  }

  if (wvarhreeworlds) {
   image(BBBwinthreeworlds, 467, 319);
  } else {
   image(unknown, 467, 319);
  }

  //Achievement Descriptions
  if (mouseX >= 46 & mouseY >= 106 & mouseX <= 149 & mouseY <= 209) {
   image(ggdiversityday, 82, 11);
   if (diversityday == true) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 185 & mouseY >= 106 & mouseX <= 288 & mouseY <= 209) {
   image(ggflawless, 82, 11);
   if (flawless == true) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 323 & mouseY >= 107 & mouseX <= 426 & mouseY <= 210) {
   image(ggticktickboom, 82, 11);
   if (trifecta == true) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 467 & mouseY >= 108 & mouseX <= 570 & mouseY <= 211) {
   image(ggonebeatstwo, 82, 11);
   if (onebeatstwo == true) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 46 & mouseY >= 317 & mouseX <= 149 & mouseY <= 420) {
   image(ggdvsg, 82, 11);
   if (dvsg == true) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 185 & mouseY >= 317 & mouseX <= 288 & mouseY <= 420) {
   image(ggsmallbutmighty, 82, 11);
   if (smallbutmighty == true) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 323 & mouseY >= 318 & mouseX <= 426 & mouseY <= 421) {
   image(ggnohelpneeded, 82, 11);
   if (nohelpneeded == true) {
    image(surprise, 125, 53);
   }
  } else if (mouseX >= 467 & mouseY >= 319 & mouseX <= 570 & mouseY <= 422 & wvarhreeworlds == false) {
   image(ggtrifecta, 82, 11);
  } else if (mouseX >= 467 & mouseY >= 319 & mouseX <= 570 & mouseY <= 422 & wvarhreeworlds == true) {
   image(ggtrifecta2, 82, 11);
   image(surprise, 125, 53);
  }
 }

 if (screenNum == 15) {
  image(advice1, 0, 0);
 } // Advice image 
 if (screenNum == 16) {
  image(advice2, 0, 0);
 } // Advice Image

 if (screenNum == 17) {
  // Change the ball colour achivement screen
  image(advice4, 0, 0);

  if (colourOrd == 0) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(94, 215, 79, 77);
  } else if (colourOrd == 1) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(227, 215, 79, 77);
  } else if (colourOrd == 2) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(353, 215, 79, 77);
  } else if (colourOrd == 3) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(493, 215, 79, 77);
  }
  if (colourOrd == 4) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(94, 310, 79, 77);
  } else if (colourOrd == 5) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(227, 310, 79, 77);
  } else if (colourOrd == 6) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(353, 310, 79, 77);
  } else if (colourOrd == 7) {
   stroke(255, 0, 0);
   strokeWeight(4);
   noFill();
   rect(493, 310, 79, 77);
  }
 }

 if (screenNum == 18) {
  image(advice10, 0, 0);
 }
 if (screenNum == 19) {
  image(advice5, 0, 0);
 }
 if (screenNum == 20) {
  image(advice6, 0, 0);
 }
 if (screenNum == 21) {
  image(advice7, 0, 0);
 }
 if (screenNum == 22) {
  image(advice8, 0, 0);
 }
 if (screenNum == 23) {
  image(advice9, 0, 0);
 }

 if (screenNum == 24) {
  // Change field design, achivement screen
  image(advice3, 0, 0);

  if (fieldOrd == 0) {
   stroke(255, 0, 0);
   strokeWeight(5);
   noFill();
   rect(74, 223, 104, 123);
  } else if (fieldOrd == 1) {
   stroke(255, 0, 0);
   strokeWeight(5);
   noFill();
   rect(210, 223, 104, 123);
  } else if (fieldOrd == 2) {
   stroke(255, 0, 0);
   strokeWeight(5);
   noFill();
   rect(347, 223, 104, 123);
  } else if (fieldOrd == 3) {
   stroke(255, 0, 0);
   strokeWeight(5);
   noFill();
   rect(483, 223, 104, 123);
  }

 }

 if (screenNum == 25) {
  image(advice11, 0, 0);
 }
 if (screenNum == 26) {
  image(advice12, 0, 0);
 }
 if (screenNum == 27) {
  image(advice13, 0, 0);
 }
 if (screenNum == 28) {
  image(advice14, 0, 0);
 }
 if (screenNum == 29) {
  image(advice15, 0, 0);
 }
 if (screenNum == 30) {
  image(advice16, 0, 0);
 }

 if (menu == true) {
  // Main menu screen

  //mainMenuMusic.play();

  secretSel = 0;
  screenNum = 1;
  image(mainMenu, 0, 0);

  if (mouseX >= 200 & mouseX <= 445) {
   // Quick play
   if (mouseY >= 153 & mouseY <= 193) {
    newMenuSelection("quickplay");
    noFill();
    stroke(0, 150, 0);
    strokeWeight(4);
    rect(200, 158, 248, 48);
   }
   //Tournament
   if (mouseY >= 220 & mouseY <= 260) {
    newMenuSelection("tournament");
    noFill();
    stroke(0, 150, 0);
    strokeWeight(4);
    rect(183, 215, 280, 48);
   }
   //Instructions
   if (mouseY >= 280 & mouseY <= 320) {
    noFill();
    stroke(0, 150, 0);
    strokeWeight(4);
    rect(183, 270, 280, 48);
    newMenuSelection("instructions");
   }
   //Acheivments
   if (mouseY >= 340 & mouseY <= 380) {
    newMenuSelection("achievements");
    noFill();
    stroke(0, 150, 0);
    strokeWeight(4);
    rect(183, 330, 280, 48);
   }
   //Credits
   if (mouseY >= 400 & mouseY <= 440) {
    newMenuSelection("credits");
    noFill();
    stroke(0, 150, 0);
    strokeWeight(4);
    rect(235, 390, 180, 44);
   }
    }
    else {
        newMenuSelection("");
    }
 }
 else {
    mainMenuMusic.stop();
    mainMenuMusic.setVolume(0);
    }

 if (tourney == true & tourneyBegin == false) {

    mainMenuMusic.setVolume(0);
  // Update with the secret countries if they're unlocked
  if (secretSel == 1) {
   background(selcount2);
  } else if (secretSel == 2) {
   background(selcount3);
  } else {
   background(selCount);
  }

  // Let's the user select secret countries if they know the secret
  if (keyPressed) {
   if (key == '!') {
    secretSel = 1;
   }

   if (key == '*' & secretSel == 1) {
    secretSel = 2;
   }
  }


  // Draw the selection boxes over the user selection
  //Italy
  if (mouseX >= 487 & mouseX <= 600 & mouseY >= 135 & mouseY <= 286 & screenNum < 90) {
   rect(440, 135, 161, 151);
  }
  //USA
  else if (mouseX >= 316 & mouseX <= 487 & mouseY >= 135 & mouseY <= 286 & screenNum < 90) {
   rect(316, 135, 171, 151);
  }
  //Germany
  else if (mouseX >= 149 & mouseX <= 316 & mouseY >= 135 & mouseY <= 286 & screenNum < 90) {
   rect(149, 135, 166, 151);
  }
  //China
  else if (mouseX >= 25 & mouseX <= 149 & mouseY >= 135 & mouseY <= 286 & screenNum < 90) {
   rect(25, 105, 101, 101);
  }
  //Spain
  else if (mouseX >= 487 & mouseX <= 650 & mouseY >= 287 & mouseY <= 505 & screenNum < 90) {
   rect(487, 287, 161, 166);
  }
  //UK
  else if (mouseX >= 316 & mouseX <= 487 & mouseY >= 287 & mouseY <= 505 & screenNum < 90) {
   rect(316, 287, 171, 166);
  }
  //Canada
  else if (mouseX >= 149 & mouseX <= 316 & mouseY >= 287 & mouseY <= 505 & screenNum < 90) {
   rect(149, 287, 166, 166);
  }
  //Russia
  else if (mouseX >= 0 & mouseX <= 149 & mouseY >= 287 & mouseY <= 505 & screenNum < 90) {
   rect(0, 287, 151, 166);
  }
  //Brazil
  else if (mouseX >= 146 & mouseY >= 0 & mouseX <= 306 & mouseY <= 135 & secretSel > 0) {
   rect(146, 0, 160, 135);
  }
  //France
  else if (mouseX >= 306 & mouseY >= 0 & mouseX <= 466 & mouseY <= 135 & secretSel > 0) {
   rect(306, 0, 175, 135);
  }
  //Portugal
  else if (mouseX >= 0 & mouseY >= 0 & mouseX <= 146 & mouseY <= 135 & secretSel > 1) {
   rect(0, 0, 146, 135);
  }
  //Argentina
  else if (mouseX >= 475 & mouseY >= 0 & mouseX <= 650 & mouseY <= 135 & secretSel > 1) {
   rect(475, 0, 175, 135);
  }


  //Country Descriptions
  if (screenNum == 99) {
   image(cdItaly, 175, 75);
  } else if (screenNum == 98) {
   image(cdUSA, 175, 75);
  } else if (screenNum == 97) {
   image(cdGermany, 175, 75);
  } else if (screenNum == 96) {
   image(cdChina, 175, 75);
  } else if (screenNum == 95) {
   image(cdSpain, 175, 75);
  } else if (screenNum == 94) {
   image(cdUK, 175, 75);
  } else if (screenNum == 93) {
   image(cdCanada, 175, 75);
  } else if (screenNum == 92) {
   image(cdRussia, 175, 75);
  } else if (screenNum == 100) {
   image(cdArgentina, 175, 75);
  } else if (screenNum == 101) {
   image(cdBrazil, 175, 75);
  } else if (screenNum == 102) {
   image(cdFrance, 175, 75);
  } else if (screenNum == 103) {
   image(cdPortugal, 175, 75);
  }


  if (screenNum > 90) {
   if (mouseX >= 181 & mouseX <= 261 & mouseY >= 391 & mouseY <= 420 & tourneyBegin == false) {
    serbia = true;
   } else {
    serbia = false;
   }

   if (mouseX >= 388 & mouseX <= 468 & mouseY >= 391 & mouseY <= 420 & tourneyBegin == false) {
    serbia2 = true;
   } else {
    serbia2 = false;
   }
  } else {
   serbia = false;
   serbia2 = false;
  }
 }

 //Begin the tournament with country selected
 if (tourneyBegin == true) {

  if (slovakia == 0) {
   background(bracket);
   if (sortList == true) {
    for (var i = 7; i >= 0; i--) {
     var x = int(floor(random(0, y)));
     while (x == 0 & CanadaX == true | x == 1 & ChinaX == true | x == 2 & GermanyX == true | x == 3 & ItalyX == true | x == 4 & RussiaX == true | x == 5 & SpainX == true | x == 6 & UKX == true | x == 7 & USAX == true) {
      x = int(floor(random(0, y)));
     }
     if (x == 0) {
      CanadaX = true;
     } else if (x == 1) {
      ChinaX = true;
     } else if (x == 2) {
      GermanyX = true;
     } else if (x == 3) {
      ItalyX = true;
     } else if (x == 4) {
      RussiaX = true;
     } else if (x == 5) {
      SpainX = true;
     } else if (x == 6) {
      UKX = true;
     } else if (x == 7) {
      USAX = true;
     }
     countryMix[i] = countries[x];
     sortList = false;
    }
   }

   //Slot1 Image
   if (countryMix[0] == "Italy") {
    image(ItalyIcon, 3, 85);
   } else if (countryMix[0] == "Canada") {
    image(CanadaIcon, 3, 85);
   } else if (countryMix[0] == "China") {
    image(ChinaIcon, 3, 85);
   } else if (countryMix[0] == "Germany") {
    image(GermanyIcon, 3, 85);
   } else if (countryMix[0] == "Russia") {
    image(RussiaIcon, 3, 85);
   } else if (countryMix[0] == "Spain") {
    image(SpainIcon, 3, 85);
   } else if (countryMix[0] == "UK") {
    image(UKIcon, 3, 85);
   } else if (countryMix[0] == "USA") {
    image(USAIcon, 3, 85);
   } else if (countryMix[0] == "Argentina") {
    image(ArgentinaIcon, 3, 85);
   } else if (countryMix[0] == "Brazil") {
    image(BrazilIcon, 3, 85);
   } else if (countryMix[0] == "France") {
    image(FranceIcon, 3, 85);
   } else if (countryMix[0] == "Portugal") {
    image(PortugalIcon, 3, 85);
   }

   if (countryMix[1] == "Italy") {
    image(ItalyIcon, 3, 146);
   } else if (countryMix[1] == "Canada") {
    image(CanadaIcon, 3, 146);
   } else if (countryMix[1] == "China") {
    image(ChinaIcon, 3, 146);
   } else if (countryMix[1] == "Germany") {
    image(GermanyIcon, 3, 146);
   } else if (countryMix[1] == "Russia") {
    image(RussiaIcon, 3, 146);
   } else if (countryMix[1] == "Spain") {
    image(SpainIcon, 3, 146);
   } else if (countryMix[1] == "UK") {
    image(UKIcon, 3, 146);
   } else if (countryMix[1] == "USA") {
    image(USAIcon, 3, 146);
   } else if (countryMix[1] == "Argentina") {
    image(ArgentinaIcon, 3, 146);
   } else if (countryMix[1] == "Brazil") {
    image(BrazilIcon, 3, 146);
   } else if (countryMix[1] == "France") {
    image(FranceIcon, 3, 146);
   } else if (countryMix[1] == "Portugal") {
    image(PortugalIcon, 3, 146);
   }

   if (countryMix[2] == "Italy") {
    image(ItalyIcon, 3, 265);
   } else if (countryMix[2] == "Canada") {
    image(CanadaIcon, 3, 265);
   } else if (countryMix[2] == "China") {
    image(ChinaIcon, 3, 265);
   } else if (countryMix[2] == "Germany") {
    image(GermanyIcon, 3, 265);
   } else if (countryMix[2] == "Russia") {
    image(RussiaIcon, 3, 265);
   } else if (countryMix[2] == "Spain") {
    image(SpainIcon, 3, 265);
   } else if (countryMix[2] == "UK") {
    image(UKIcon, 3, 265);
   } else if (countryMix[2] == "USA") {
    image(USAIcon, 3, 265);
   } else if (countryMix[2] == "Argentina") {
    image(ArgentinaIcon, 3, 265);
   } else if (countryMix[2] == "Brazil") {
    image(BrazilIcon, 3, 265);
   } else if (countryMix[2] == "France") {
    image(FranceIcon, 3, 265);
   } else if (countryMix[2] == "Portugal") {
    image(PortugalIcon, 3, 265);
   }

   if (countryMix[3] == "Italy") {
    image(ItalyIcon, 3, 323);
   } else if (countryMix[3] == "Canada") {
    image(CanadaIcon, 3, 323);
   } else if (countryMix[3] == "China") {
    image(ChinaIcon, 3, 323);
   } else if (countryMix[3] == "Germany") {
    image(GermanyIcon, 3, 323);
   } else if (countryMix[3] == "Russia") {
    image(RussiaIcon, 3, 323);
   } else if (countryMix[3] == "Spain") {
    image(SpainIcon, 3, 323);
   } else if (countryMix[3] == "UK") {
    image(UKIcon, 3, 323);
   } else if (countryMix[3] == "USA") {
    image(USAIcon, 3, 323);
   } else if (countryMix[3] == "Argentina") {
    image(ArgentinaIcon, 3, 323);
   } else if (countryMix[3] == "Brazil") {
    image(BrazilIcon, 3, 323);
   } else if (countryMix[3] == "France") {
    image(FranceIcon, 3, 323);
   } else if (countryMix[3] == "Portugal") {
    image(PortugalIcon, 3, 323);
   }

   if (countryMix[4] == "Italy") {
    image(ItalyIcon, 559, 85);
   } else if (countryMix[4] == "Canada") {
    image(CanadaIcon, 559, 85);
   } else if (countryMix[4] == "China") {
    image(ChinaIcon, 559, 85);
   } else if (countryMix[4] == "Germany") {
    image(GermanyIcon, 559, 85);
   } else if (countryMix[4] == "Russia") {
    image(RussiaIcon, 559, 85);
   } else if (countryMix[4] == "Spain") {
    image(SpainIcon, 559, 85);
   } else if (countryMix[4] == "UK") {
    image(UKIcon, 559, 85);
   } else if (countryMix[4] == "USA") {
    image(USAIcon, 559, 85);
   } else if (countryMix[4] == "Argentina") {
    image(ArgentinaIcon, 559, 85);
   } else if (countryMix[4] == "Brazil") {
    image(BrazilIcon, 559, 85);
   } else if (countryMix[4] == "France") {
    image(FranceIcon, 559, 85);
   } else if (countryMix[4] == "Portugal") {
    image(PortugalIcon, 559, 85);
   }

   if (countryMix[5] == "Italy") {
    image(ItalyIcon, 559, 143);
   } else if (countryMix[5] == "Canada") {
    image(CanadaIcon, 559, 143);
   } else if (countryMix[5] == "China") {
    image(ChinaIcon, 559, 143);
   } else if (countryMix[5] == "Germany") {
    image(GermanyIcon, 559, 143);
   } else if (countryMix[5] == "Russia") {
    image(RussiaIcon, 559, 143);
   } else if (countryMix[5] == "Spain") {
    image(SpainIcon, 559, 143);
   } else if (countryMix[5] == "UK") {
    image(UKIcon, 559, 143);
   } else if (countryMix[5] == "USA") {
    image(USAIcon, 559, 143);
   } else if (countryMix[5] == "Argentina") {
    image(ArgentinaIcon, 559, 143);
   } else if (countryMix[5] == "Brazil") {
    image(BrazilIcon, 559, 143);
   } else if (countryMix[5] == "France") {
    image(FranceIcon, 559, 143);
   } else if (countryMix[5] == "Portugal") {
    image(PortugalIcon, 559, 143);
   }

   if (countryMix[6] == "Italy") {
    image(ItalyIcon, 559, 277);
   } else if (countryMix[6] == "Canada") {
    image(CanadaIcon, 559, 277);
   } else if (countryMix[6] == "China") {
    image(ChinaIcon, 559, 277);
   } else if (countryMix[6] == "Germany") {
    image(GermanyIcon, 559, 277);
   } else if (countryMix[6] == "Russia") {
    image(RussiaIcon, 559, 277);
   } else if (countryMix[6] == "Spain") {
    image(SpainIcon, 559, 277);
   } else if (countryMix[6] == "UK") {
    image(UKIcon, 559, 277);
   } else if (countryMix[6] == "USA") {
    image(USAIcon, 559, 277);
   } else if (countryMix[6] == "Argentina") {
    image(ArgentinaIcon, 559, 277);
   } else if (countryMix[6] == "Brazil") {
    image(BrazilIcon, 559, 277);
   } else if (countryMix[6] == "France") {
    image(FranceIcon, 559, 277);
   } else if (countryMix[6] == "Portugal") {
    image(PortugalIcon, 559, 277);
   }

   if (countryMix[7] == "Italy") {
    image(ItalyIcon, 560, 333);
   } else if (countryMix[7] == "Canada") {
    image(CanadaIcon, 560, 333);
   } else if (countryMix[7] == "China") {
    image(ChinaIcon, 560, 333);
   } else if (countryMix[7] == "Germany") {
    image(GermanyIcon, 560, 333);
   } else if (countryMix[7] == "Russia") {
    image(RussiaIcon, 560, 333);
   } else if (countryMix[7] == "Spain") {
    image(SpainIcon, 560, 333);
   } else if (countryMix[7] == "UK") {
    image(UKIcon, 560, 333);
   } else if (countryMix[7] == "USA") {
    image(USAIcon, 560, 333);
   } else if (countryMix[7] == "Argentina") {
    image(ArgentinaIcon, 560, 333);
   } else if (countryMix[7] == "Brazil") {
    image(BrazilIcon, 560, 333);
   } else if (countryMix[7] == "France") {
    image(FranceIcon, 560, 333);
   } else if (countryMix[7] == "Portugal") {
    image(PortugalIcon, 560, 333);
   }

   // if(selectThird==true){
   if (pos == 0 & game == false & roundPlay == 1) {
    cpuUser = countryMix[1];
   } else if (pos == 1 & game == false & roundPlay == 1) {
    cpuUser = countryMix[0];
   } else if (pos == 2 & game == false & roundPlay == 1) {
    cpuUser = countryMix[3];
   } else if (pos == 3 & game == false & roundPlay == 1) {
    cpuUser = countryMix[2];
   } else if (pos == 4 & game == false & roundPlay == 1) {
    cpuUser = countryMix[5];
   } else if (pos == 5 & game == false & roundPlay == 1) {
    cpuUser = countryMix[4];
   } else if (pos == 6 & game == false & roundPlay == 1) {
    cpuUser = countryMix[7];
   } else if (pos == 7 & game == false & roundPlay == 1) {
    cpuUser = countryMix[6];
   }
   // selectThird=false;
   // }

   if (roundPlay == 2 | roundPlay == 3 | roundPlay == 4) {

    //ENTER ALL THE CODE FOR ADVANCING TO ROUND 2!!!!!!!!!!!!!!!!


    //ADVANCING OPPOSING COUNTRIES
    if (selectOnce == true) {
     a = round(random(0, 1));
     b = round(random(2, 3));
     c = round(random(4, 5));
     d = round(random(6, 7));
     e = round(random(0, 1));
     selectOnce = false;
    }

    // FILL IN BRACKET
    if (countryMix[a] == "Canada") {
     image(CanadaIcon, 129, 149);
    } else if (countryMix[a] == "China") {
     image(ChinaIcon, 129, 149);
    } else if (countryMix[a] == "Germany") {
     image(GermanyIcon, 129, 149);
    } else if (countryMix[a] == "Italy") {
     image(ItalyIcon, 129, 149);
    } else if (countryMix[a] == "Russia") {
     image(RussiaIcon, 129, 149);
    } else if (countryMix[a] == "Spain") {
     image(SpainIcon, 129, 149);
    } else if (countryMix[a] == "UK") {
     image(UKIcon, 129, 149);
    } else if (countryMix[a] == "USA") {
     image(USAIcon, 129, 149);
    } else if (countryMix[a] == "Argentina") {
     image(ArgentinaIcon, 129, 149);
    } else if (countryMix[a] == "Brazil") {
     image(BrazilIcon, 129, 149);
    } else if (countryMix[a] == "France") {
     image(FranceIcon, 129, 149);
    } else if (countryMix[a] == "Portugal") {
     image(PortugalIcon, 129, 149);
    }

    if (countryMix[b] == "Canada") {
     image(CanadaIcon, 129, 255);
    } else if (countryMix[b] == "China") {
     image(ChinaIcon, 129, 255);
    } else if (countryMix[b] == "Germany") {
     image(GermanyIcon, 129, 255);
    } else if (countryMix[b] == "Italy") {
     image(ItalyIcon, 129, 255);
    } else if (countryMix[b] == "Russia") {
     image(RussiaIcon, 129, 255);
    } else if (countryMix[b] == "Spain") {
     image(SpainIcon, 129, 255);
    } else if (countryMix[b] == "UK") {
     image(UKIcon, 129, 255);
    } else if (countryMix[b] == "USA") {
     image(USAIcon, 129, 255);
    } else if (countryMix[b] == "Argentina") {
     image(ArgentinaIcon, 129, 255);
    } else if (countryMix[b] == "Brazil") {
     image(BrazilIcon, 129, 255);
    } else if (countryMix[b] == "France") {
     image(FranceIcon, 129, 255);
    } else if (countryMix[b] == "Portugal") {
     image(PortugalIcon, 129, 255);
    }

    if (countryMix[c] == "Canada") {
     image(CanadaIcon, 451, 157);
    } else if (countryMix[c] == "China") {
     image(ChinaIcon, 451, 157);
    } else if (countryMix[c] == "Germany") {
     image(GermanyIcon, 451, 157);
    } else if (countryMix[c] == "Italy") {
     image(ItalyIcon, 451, 157);
    } else if (countryMix[c] == "Russia") {
     image(RussiaIcon, 451, 157);
    } else if (countryMix[c] == "Spain") {
     image(SpainIcon, 451, 157);
    } else if (countryMix[c] == "UK") {
     image(UKIcon, 451, 157);
    } else if (countryMix[c] == "USA") {
     image(USAIcon, 451, 157);
    } else if (countryMix[c] == "Argentina") {
     image(ArgentinaIcon, 451, 157);
    } else if (countryMix[c] == "Brazil") {
     image(BrazilIcon, 451, 157);
    } else if (countryMix[c] == "France") {
     image(FranceIcon, 451, 157);
    } else if (countryMix[c] == "Portugal") {
     image(PortugalIcon, 451, 157);
    }

    if (countryMix[d] == "Canada") {
     image(CanadaIcon, 453, 254);
    } else if (countryMix[d] == "China") {
     image(ChinaIcon, 453, 254);
    } else if (countryMix[d] == "Germany") {
     image(GermanyIcon, 453, 254);
    } else if (countryMix[d] == "Italy") {
     image(ItalyIcon, 453, 254);
    } else if (countryMix[d] == "Russia") {
     image(RussiaIcon, 453, 254);
    } else if (countryMix[d] == "Spain") {
     image(SpainIcon, 453, 254);
    } else if (countryMix[d] == "UK") {
     image(UKIcon, 453, 254);
    } else if (countryMix[d] == "USA") {
     image(USAIcon, 453, 254);
    } else if (countryMix[d] == "Argentina") {
     image(ArgentinaIcon, 453, 254);
    } else if (countryMix[d] == "Brazil") {
     image(BrazilIcon, 453, 254);
    } else if (countryMix[d] == "France") {
     image(FranceIcon, 453, 254);
    } else if (countryMix[d] == "Portugal") {
     image(PortugalIcon, 453, 254);
    }

    //TO ADVANCE USER COUNTRY
    if (pos == 0 | pos == 1) {
     if (user == "Canada") {
      image(CanadaIcon, 129, 149);
     } else if (user == "China") {
      image(ChinaIcon, 129, 149);
     } else if (user == "Germany") {
      image(GermanyIcon, 129, 149);
     } else if (user == "Italy") {
      image(ItalyIcon, 129, 149);
     } else if (user == "Russia") {
      image(RussiaIcon, 129, 149);
     } else if (user == "Spain") {
      image(SpainIcon, 129, 149);
     } else if (user == "UK") {
      image(UKIcon, 129, 149);
     } else if (user == "USA") {
      image(USAIcon, 129, 149);
     } else if (user == "Argentina") {
      image(ArgentinaIcon, 129, 149);
     } else if (user == "Brazil") {
      image(BrazilIcon, 129, 149);
     } else if (user == "France") {
      image(FranceIcon, 129, 149);
     } else if (user == "Portugal") {
      image(PortugalIcon, 129, 149);
     }
     if (selectTwice == true) {
      cpuUser = countryMix[b];
      selectTwice = false;
     }

    }

    if (pos == 2 | pos == 3) {
     if (user == "Canada") {
      image(CanadaIcon, 129, 255);
     } else if (user == "China") {
      image(ChinaIcon, 129, 255);
     } else if (user == "Germany") {
      image(GermanyIcon, 129, 255);
     } else if (user == "Italy") {
      image(ItalyIcon, 129, 255);
     } else if (user == "Russia") {
      image(RussiaIcon, 129, 255);
     } else if (user == "Spain") {
      image(SpainIcon, 129, 255);
     } else if (user == "UK") {
      image(UKIcon, 129, 255);
     } else if (user == "USA") {
      image(USAIcon, 129, 255);
     } else if (user == "Argentina") {
      image(ArgentinaIcon, 129, 255);
     } else if (user == "Brazil") {
      image(BrazilIcon, 129, 255);
     } else if (user == "France") {
      image(FranceIcon, 129, 255);
     } else if (user == "Portugal") {
      image(PortugalIcon, 129, 255);
     }
     if (selectTwice == true) {
      cpuUser = countryMix[a];
      selectTwice = false;
     }
    }

    if (pos == 4 | pos == 5) {
     if (user == "Canada") {
      image(CanadaIcon, 451, 157);
     } else if (user == "China") {
      image(ChinaIcon, 451, 157);
     } else if (user == "Germany") {
      image(GermanyIcon, 451, 157);
     } else if (user == "Italy") {
      image(ItalyIcon, 451, 157);
     } else if (user == "Russia") {
      image(RussiaIcon, 451, 157);
     } else if (user == "Spain") {
      image(SpainIcon, 451, 157);
     } else if (user == "UK") {
      image(UKIcon, 451, 157);
     } else if (user == "USA") {
      image(USAIcon, 451, 157);
     } else if (user == "Argentina") {
      image(ArgentinaIcon, 451, 157);
     } else if (user == "Brazil") {
      image(BrazilIcon, 451, 157);
     } else if (user == "France") {
      image(FranceIcon, 451, 157);
     } else if (user == "Portugal") {
      image(PortugalIcon, 451, 157);
     }
     if (selectTwice == true) {
      cpuUser = countryMix[d];
      selectTwice = false;
     }
    }

    if (pos == 6 | pos == 7) {
     if (user == "Canada") {
      image(CanadaIcon, 453, 254);
     } else if (user == "China") {
      image(ChinaIcon, 453, 254);
     } else if (user == "Germany") {
      image(GermanyIcon, 453, 254);
     } else if (user == "Italy") {
      image(ItalyIcon, 453, 254);
     } else if (user == "Russia") {
      image(RussiaIcon, 453, 254);
     } else if (user == "Spain") {
      image(SpainIcon, 453, 254);
     } else if (user == "UK") {
      image(UKIcon, 453, 254);
     } else if (user == "USA") {
      image(USAIcon, 453, 254);
     } else if (user == "Argentina") {
      image(ArgentinaIcon, 453, 254);
     } else if (user == "Brazil") {
      image(BrazilIcon, 453, 254);
     } else if (user == "France") {
      image(FranceIcon, 453, 254);
     } else if (user == "Portugal") {
      image(PortugalIcon, 453, 254);
     }
     if (selectTwice == true) {
      cpuUser = countryMix[c];
      selectTwice = false;
     }
    }





   }

   if (roundPlay == 3 | roundPlay == 4) {



    //USER COUNTRY -- This goes after the cpu
    if (pos == 0 | pos == 1 | pos == 2 | pos == 3) {
     if (user == "Canada") {
      image(CanadaIcon, 241, 199);
     } else if (user == "China") {
      image(ChinaIcon, 241, 199);
     } else if (user == "Germany") {
      image(GermanyIcon, 241, 199);
     } else if (user == "Italy") {
      image(ItalyIcon, 241, 199);
     } else if (user == "Russia") {
      image(RussiaIcon, 241, 199);
     } else if (user == "Spain") {
      image(SpainIcon, 241, 199);
     } else if (user == "UK") {
      image(UKIcon, 241, 199);
     } else if (user == "USA") {
      image(USAIcon, 241, 199);
     } else if (user == "Argentina") {
      image(ArgentinaIcon, 241, 199);
     } else if (user == "Brazil") {
      image(BrazilIcon, 241, 199);
     } else if (user == "France") {
      image(FranceIcon, 241, 199);
     } else if (user == "Portugal") {
      image(PortugalIcon, 241, 199);
     }

     if (e == 0) {
      finalist = countryMix[c];
     } else {
      finalist = countryMix[d];
     }

     if (selectLast == true) {
      cpuUser = finalist;
      selectLast = false;
     }

     if (finalist == "Canada") {
      image(CanadaIcon, 347, 198);
     } else if (finalist == "China") {
      image(ChinaIcon, 347, 198);
     } else if (finalist == "Germany") {
      image(GermanyIcon, 347, 198);
     } else if (finalist == "Italy") {
      image(ItalyIcon, 347, 198);
     } else if (finalist == "Russia") {
      image(RussiaIcon, 347, 198);
     } else if (finalist == "Spain") {
      image(SpainIcon, 347, 198);
     } else if (finalist == "UK") {
      image(UKIcon, 347, 198);
     } else if (finalist == "USA") {
      image(USAIcon, 347, 198);
     } else if (finalist == "Argentina") {
      image(ArgentinaIcon, 347, 198);
     } else if (finalist == "Brazil") {
      image(BrazilIcon, 347, 198);
     } else if (finalist == "France") {
      image(FranceIcon, 347, 198);
     } else if (finalist == "Portugal") {
      image(PortugalIcon, 347, 198);
     }

    } else if (pos == 4 | pos == 5 | pos == 6 | pos == 7) {
     if (user == "Canada") {
      image(CanadaIcon, 347, 198);
     } else if (user == "China") {
      image(ChinaIcon, 347, 198);
     } else if (user == "Germany") {
      image(GermanyIcon, 347, 198);
     } else if (user == "Italy") {
      image(ItalyIcon, 347, 198);
     } else if (user == "Russia") {
      image(RussiaIcon, 347, 198);
     } else if (user == "Spain") {
      image(SpainIcon, 347, 198);
     } else if (user == "UK") {
      image(UKIcon, 347, 198);
     } else if (user == "USA") {
      image(USAIcon, 347, 198);
     } else if (user == "Argentina") {
      image(ArgentinaIcon, 347, 198);
     } else if (user == "Brazil") {
      image(BrazilIcon, 347, 198);
     } else if (user == "France") {
      image(FranceIcon, 347, 198);
     } else if (user == "Portugal") {
      image(PortugalIcon, 347, 198);
     }

     if (e == 0) {
      finalist = countryMix[a];
     } else {
      finalist = countryMix[b];
     }

     if (selectFourth == true) {
      cpuUser = finalist;
      selectFourth = false;
     }

     if (finalist == "Canada") {
      image(CanadaIcon, 241, 199);
     } else if (finalist == "China") {
      image(ChinaIcon, 241, 199);
     } else if (finalist == "Germany") {
      image(GermanyIcon, 241, 199);
     } else if (finalist == "Italy") {
      image(ItalyIcon, 241, 199);
     } else if (finalist == "Russia") {
      image(RussiaIcon, 241, 199);
     } else if (finalist == "Spain") {
      image(SpainIcon, 241, 199);
     } else if (finalist == "UK") {
      image(UKIcon, 241, 199);
     } else if (finalist == "USA") {
      image(USAIcon, 241, 199);
     } else if (finalist == "Argentina") {
      image(ArgentinaIcon, 241, 199);
     } else if (finalist == "Brazil") {
      image(BrazilIcon, 241, 199);
     } else if (finalist == "France") {
      image(FranceIcon, 241, 199);
     } else if (finalist == "Portugal") {
      image(PortugalIcon, 241, 199);
     }

    }



   }

   if (roundPlay == 4) {
    background(bracket2);
    if (user == "Canada") {
     image(CanadaIcon, 290, 94);
    } else if (user == "China") {
     image(ChinaIcon, 290, 94);
    } else if (user == "Germany") {
     image(GermanyIcon, 290, 94);
    } else if (user == "Italy") {
     image(ItalyIcon, 290, 94);
    } else if (user == "Russia") {
     image(RussiaIcon, 290, 94);
    } else if (user == "Spain") {
     image(SpainIcon, 290, 94);
    } else if (user == "UK") {
     image(UKIcon, 290, 94);
    } else if (user == "USA") {
     image(USAIcon, 290, 94);
    } else if (user == "Argentina") {
     image(ArgentinaIcon, 290, 94);
    } else if (user == "Brazil") {
     image(BrazilIcon, 290, 94);
    } else if (user == "France") {
     image(FranceIcon, 290, 94);
    } else if (user == "Portugal") {
     image(PortugalIcon, 290, 94);
    }
    cpuUser = "Team World";
   }

   if (roundPlay == 5 | roundPlay == 6) {
    if (user == "Canada") {
     image(CanadaWin, 0, 0);
    } else if (user == "China") {
     image(ChinaWin, 0, 0);
    } else if (user == "Germany") {
     image(GermanyWin, 0, 0);
    } else if (user == "Italy") {
     image(ItalyWin, 0, 0);
    } else if (user == "Russia") {
     image(RussiaWin, 0, 0);
    } else if (user == "Spain") {
     image(SpainWin, 0, 0);
    } else if (user == "UK") {
     image(UKWin, 0, 0);
    } else if (user == "USA") {
     image(USAWin, 0, 0);
    } else if (user == "Argentina") {
     image(ArgentinaWin, 0, 0);
    } else if (user == "Brazil") {
     image(BrazilWin, 0, 0);
    } else if (user == "France") {
     image(FranceWin, 0, 0);
    } else if (user == "Portugal") {
     image(PortugalWin, 0, 0);
    }

    if (indonesia == false) {
     lifeChamps += 1;
     indonesia = true;
    }

    worldchamp = true;
    if (vwx == false) {
     lifeAchievements += 1;
     vwx = true;
    }
    if (isitflawed == false) {
     flawless = true;
     if (bcd == false) {
      lifeAchievements += 1;
      bcd = true;
     }
    }


   }

  }

  //FOR THE SHOP CODE
  else if (slovakia == 1) {
   background(shop);
   stroke(0, 0, 0);
   fill(0, 255, 0);
   textSize(22);
   text("CASH: $" + cash, 200, 470);

   //USER STRENGTH
   if (mouseX >= 73 & mouseX <= 213 & mouseY >= 233 & mouseY <= 320) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(73, 233, 140, 87);
    image(saying3, 518, 180);
   }
   //OPPONENT STRENGTH
   else if (mouseX >= 229 & mouseX <= 423 & mouseY >= 242 & mouseY <= 321) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(229, 242, 194, 79);
    image(saying4, 518, 180);
   }
   //User Speed
   else if (mouseX >= 148 & mouseX <= 280 & mouseY >= 119 & mouseY <= 233) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(148, 119, 132, 114);
    image(saying5, 518, 180);
   }
   //Opponent Speed
   else if (mouseX >= 298 & mouseX <= 455 & mouseY >= 117 & mouseY <= 238) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(4);
    rect(298, 117, 157, 121);
    image(saying6, 523, 180);
   } else if (roundPlay == 1) {
    image(saying1, 520, 185);
   } else if (roundPlay == 2) {
    image(saying2, 520, 185);
   } else if (roundPlay == 3) {
    image(saying7, 520, 185);
   } else if (roundPlay == 4) {
    image(saying8, 532, 173);
   }


  } else if (slovakia == 2) {
   background(stats);

   //ADD ALL STATS FOR STATS PAGE HERE!!!
   stroke(0, 0, 0);
   strokeWeight(0);
   fill(0);
   textSize(22);
   text("Total time played: " + floor((millis() / 1000) / 60) + " minutes", 100, 150);
   text("Total goals scored: " + lifeGoals, 100, 200);
   text("Total goals scored against: " + lifeLowes, 100, 250);
   text("Wins: " + lifeWins + "   Ties: " + lifeTies + "   Losses: " + lifeLosses, 100, 300);
   text("Total World Championships won: " + lifeChamps, 100, 350);
   text("Total achievements: " + lifeAchievements + "/16", 100, 400);


  }

  if (countryMix[0] == user) {
   pos = 0;
  } else if (countryMix[1] == user) {
   pos = 1;
  } else if (countryMix[2] == user) {
   pos = 2;
  } else if (countryMix[3] == user) {
   pos = 3;
  } else if (countryMix[4] == user) {
   pos = 4;
  } else if (countryMix[5] == user) {
   pos = 5;
  } else if (countryMix[6] == user) {
   pos = 6;
  } else if (countryMix[7] == user) {
   pos = 7;
  } else {
   if (chubby == false) {
    pos = round(random(1, 8));
    chubby = true;
   }

   if (user == "Argentina") {
    countryMix[pos] = "Argentina";
   } else if (user == "Brazil") {
    countryMix[pos] = "Brazil";
   } else if (user == "France") {
    countryMix[pos] = "France";
   } else if (user == "Portugal") {
    countryMix[pos] = "Portugal";
   }

  }





  if (slovakia == 0 | slovakia == 1 | slovakia == 2 & tourneyBegin == true) {
   if (mouseY >= 457 & mouseY <= 487) {
    if (mouseX >= 484 & mouseX <= 634) {
     noFill();
     strokeWeight(4);
     stroke(255, 0, 0);
     rect(484, 457, 150, 30);
    } else if (mouseX >= 12 & mouseX <= 162) {
     noFill();
     strokeWeight(4);
     stroke(255, 0, 0);
     rect(12, 457, 150, 30);
    }
   }

  }

  if (slovakia == 0 & tourneyBegin == true) {
   if (mouseY >= 457 & mouseY <= 487 & mouseX >= 248 & mouseX <= 397) {
    noFill();
    strokeWeight(4);
    stroke(255, 0, 0);
    rect(248, 457, 150, 30);
   }
  }

 }



 if (quickGame == true) {

  if (secretSel == 0) {
   image(selCount, 0, 0);
  } else if (secretSel == 1) {
   image(selcount2, 0, 0);
  } else if (secretSel == 2) {
   image(selcount3, 0, 0);
  }

  if (keyPressed) {
   if (key == '!') {
    secretSel = 1;
   }
   if (key == '*' & secretSel == 1) {
    secretSel = 2;
   }
  }

  //Italy
  if (mouseX >= 495 & mouseX <= 650 & mouseY >= 120 & mouseY <= 240) {
   rect(495, 120, 124, 97);
   newMenuSelection("quickItaly");
  }
  //USA
  else if (mouseX >= 340 & mouseX <= 487 & mouseY >= 120 & mouseY <= 240) {
   rect(340, 120, 124, 97);
   newMenuSelection("quickUSA");
  }
  //Germany
  else if (mouseX >= 185 & mouseX <= 316 & mouseY >= 120 & mouseY <= 240) {
   rect(185, 120, 123, 97);
   newMenuSelection("quickGermany");
  }
  //China
  else if (mouseX >= 30 & mouseX <= 151 & mouseY >= 120 & mouseY <= 240) {
   rect(30, 120, 121, 97);
   newMenuSelection("quickChina");
  }
  //Spain
  else if (mouseX >= 487 & mouseX <= 650 & mouseY >= 287 & mouseY <= 505) {
   rect(487, 287, 121, 97);
   newMenuSelection("quickSpain");
  }
  //UK
  else if (mouseX >= 316 & mouseX <= 487 & mouseY >= 287 & mouseY <= 505) {
   rect(316, 287, 121, 97);
   newMenuSelection("quickUK");
  }
  //Canada
  else if (mouseX >= 149 & mouseX <= 316 & mouseY >= 287 & mouseY <= 505) {
   rect(149, 287, 121, 97);
   newMenuSelection("quickCanada");
  }
  //Russia
  else if (mouseX >= 0 & mouseX <= 149 & mouseY >= 287 & mouseY <= 505) {
   rect(0, 287, 121, 97);
   newMenuSelection("quickRussia");
  }
  //Brazil
  else if (mouseX >= 146 & mouseY >= 0 & mouseX <= 306 & mouseY <= 135 & secretSel > 0) {
   rect(146, 0, 160, 135);
  }
  //France
  else if (mouseX >= 306 & mouseY >= 0 & mouseX <= 466 & mouseY <= 135 & secretSel > 0) {
   rect(306, 0, 175, 135);
  }
  //Portugal
  else if (mouseX >= 0 & mouseY >= 0 & mouseX <= 146 & mouseY <= 135 & secretSel > 1) {
   rect(0, 0, 146, 135);
  }
  //Argentina
  else if (mouseX >= 475 & mouseY >= 0 & mouseX <= 650 & mouseY <= 135 & secretSel > 1) {
   rect(475, 0, 175, 135);
  }
  screen = 1;

  chooser = round(random(1, 8));
 }

 //If game is true, run a game
 if (game == true) {

    mainMenuMusic.stop();
  if (maceroni == false) {
   tint(100);

   if (fieldOrd == 0) {
    background(field);
   } else if (fieldOrd == 1) {
    background(field2);
   } else if (fieldOrd == 2) {
    background(field3);
   } else if (fieldOrd == 3) {
    background(field4);
   }


   stroke(0);
   strokeWeight(2);
   fill(255);
   textSize(32);

   //Player1
   noFill();
   strokeWeight(1);
   if (user == "Germany") {
    image(Germany, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "GermanySmall") {
    image(GermanySmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Spain") {
    image(Spain, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "SpainSmall") {
    image(SpainSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "UK") {
    image(UK, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "UKSmall") {
    image(UKSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "USA") {
    image(USA, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "USASmall") {
    image(USASmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "China") {
    image(China, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "ChinaSmall") {
    image(ChinaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Canada") {
    image(Canada, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "CanadaSmall") {
    image(CanadaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Russia") {
    image(Russia, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "RussiaSmall") {
    image(RussiaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Italy") {
    image(Italy, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "ItalySmall") {
    image(ItalySmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "ChinaBig") {
    image(ChinaBig, 0, playerY);
    rect(0, playerY, 10, 200);
   } else if (user == "Australia") {
    image(UK, 0, playerY);
    image(Australia, 0, HelperY);
    rect(0, HelperY, 10, 100);
    rect(0, playerY, 10, 100);
   } else if (user == "Brazil") {
    image(Brazil, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "BrazilSmall") {
    image(BrazilSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "France") {
    image(France, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "FranceSmall") {
    image(FranceSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Portugal") {
    image(Portugal, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "PortugalSmall") {
    image(PortugalSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Argentina") {
    image(Argentina, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "ArgentinaSmall") {
    image(ArgentinaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   }

   //Opponent
   if (tourneyBegin == false) {
    if (cpuUser == "") {
     if (chooser == 1) {
      cpuUser = "Italy";
     } else if (chooser == 2) {
      cpuUser = "UK";
     } else if (chooser == 3) {
      cpuUser = "USA";
     } else if (chooser == 4) {
      cpuUser = "Germany";
     } else if (chooser == 5) {
      cpuUser = "Spain";
     } else if (chooser == 6) {
      cpuUser = "China";
     } else if (chooser == 7) {
      cpuUser = "Canada";
     } else if (chooser == 8) {
      cpuUser = "Russia";
     } else {
      cpuUser = "switzerland";
     }
    }
   }

   //Choose Opponent's Image
   noFill();
   strokeWeight(1);
   if (cpuUser == "Italy") {
    image(Italy, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "ItalySmall") {
    image(ItalySmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "China") {
    image(China, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "ChinaSmall") {
    image(ChinaSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "ChinaBig") {
    image(ChinaBig, 640, CPUY - 50);
    rect(640, CPUY - 50, 10, 200);
   } else if (cpuUser == "Canada") {
    image(Canada, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "CanadaSmall") {
    image(CanadaSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "UK") {
    image(UK, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "UKSmall") {
    image(UKSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "USA") {
    image(USA, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "USASmall") {
    image(USASmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Spain") {
    image(Spain, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "SpainSmall") {
    image(SpainSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Russia") {
    image(Russia, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "RussiaSmall") {
    image(RussiaSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Germany") {
    image(Germany, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "GermanySmall") {
    image(GermanySmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Australia") {
    image(UK, 640, CPUY);
    rect(640, CPUY, 10, 100);
    image(Australia, 640, HelperY);
    rect(640, HelperY, 10, 100);
   } else if (cpuUser == "Team World") {
    image(World, 640, CPUY);
    rect(640, CPUY, 10, 150);
   } else {
    image(switzerland, 640, CPUY);
    rect(640, CPUY, 10, 100);
   }

   tint(255);
   fill(255);

   if (tourney == false | roundPlay == 1) {
	//normalGameMusic.play();
    textSize(22);
    text("Use the arrow keys to move your paddle", 20, 50);
    text("Hit boxes to get special powers", 20, 120);
    text("The closer to the middle, the higher the angle", 20, 190);
    text("Press the spacebar to pause the game", 20, 260);
    image(arrowKeys, 450, 22);
    image(powBlock, 345, 94);
    image(defaulted, 510, 140);
    image(spacebar, 420, 240);
   }

   textSize(40);
   text("Press any key to begin", 130, 450);
   text("Press any key to begin", 131, 450);
   text("Press any key to begin", 129, 450);


   if (keyPressed) {
    maceroni = true;
    noTint();
   }

  }

  if (maceroni == true) {

   //HEADS UP ITS ROUNDPLAY NOT THE REVERSE  
   //if(playRound==1){booster=0;}
   //else if(playRond==2){booster=1;}
   //else if(playRound==3){booster=2;}
   //else if(playRound==4){booster=3;}
   //Used to reset timer
   //if(screen==1){timex=time;screen=2;}

   if (power == true & powerActivate == true) {
    noHelp = true;
   }

   //Redraw background first every frame
   if (fieldOrd == 0) {
    background(field);
   } else if (fieldOrd == 1) {
    background(field2);
   } else if (fieldOrd == 2) {
    background(field3);
   } else if (fieldOrd == 3) {
    background(field4);
   }

   //Display Scores
   stroke(0);
   strokeWeight(2);
   fill(255);
   textSize(32);
   text(playerScore, 50, 50);
   text(CPUScore, 550, 50);
   //Display Timer
   var time = millis() - timex;
   var timer = 120.9 - (time / 1000);
   if (pause == 1) {
    timePass = 120.9 - timer;
   }

   if (timer <= 0) {
    timer = 0;
    powerActivate = false;
    RussiaPower = false;
   }


   var minutes = floor(timer / 60);
   var seconds = floor(timer % 60);
   fill(0);
   rect(280, 15, 90, 40);
   fill(255);
   text(minutes + ":", 290, 50);
   if (seconds >= 10) {
    text(seconds, 320, 50);
   } else {
    text("0" + seconds, 320, 50);
   }

   //Power UP block
   fill(255, 20, 147);
   image(powBlock, powerX, powerY);

   //When the time comes, unleash the box
   //SWITCHED TO 119 FOR TESTING PURPOSES -- SWITCH TO RANDOM NUM COME GAME TIME
   box1 = random(80, 110);
   box2 = random(30, 60);
   if (timer < box1 & powOnce == true) {
    powerX = 325;
    powerY = random(0, 480);
    powOnce = false;
   }

   if (timer < box2 & powTwice == true) {
    powerX = 325;
    powerY = random(0, 480);
    powTwice = false;
   }

   //If Ball is hit, make the box go away and give power up to player/CPU
   if (ballX + 10 >= powerX & ballX - 10 <= powerX + 33 & ballY + 10 >= powerY & ballY - 10 <= powerY + 33) {
	powerUpSound.play();
    powerX = -100;
    powerY = -100;
    powerUP = true;
    if (whoHit == true) {
     power = true;
     powerActivate = true;
    } else if (whoHit == false) {
     power = false;
     powerActivate = true;
    }
   }

   //Canada POWER WALL OF SNOW -- must be before image of paddle so that it is underneath
   if (CanadaPower == true & power == true & powerActivate == true) {
    image(wallOfSnow, 0, 0);
   }
   if (CanadaPowerCPU == true & power == false & powerActivate == true) {
    image(wallOfSnowCPU, 620, 0);
   }

   //Player1
   noFill();
   strokeWeight(1);
   if (user == "Germany") {
    image(Germany, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "GermanySmall") {
    image(GermanySmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Spain") {
    image(Spain, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "SpainSmall") {
    image(SpainSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "UK") {
    image(UK, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "UKSmall") {
    image(UKSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "USA") {
    image(USA, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "USASmall") {
    image(USASmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "China") {
    image(China, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "ChinaSmall") {
    image(ChinaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Canada") {
    image(Canada, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "CanadaSmall") {
    image(CanadaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Russia") {
    image(Russia, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "RussiaSmall") {
    image(RussiaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Italy") {
    image(Italy, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "ItalySmall") {
    image(ItalySmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "ChinaBig") {
    image(ChinaBig, 0, playerY);
    rect(0, playerY, 10, 200);
   } else if (user == "Australia") {
    image(UK, 0, playerY);
    image(Australia, 0, HelperY);
    rect(0, HelperY, 10, 100);
    rect(0, playerY, 10, 100);
   } else if (user == "Brazil") {
    image(Brazil, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "BrazilSmall") {
    image(BrazilSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "France") {
    image(France, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "FranceSmall") {
    image(FranceSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Portugal") {
    image(Portugal, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "PortugalSmall") {
    image(PortugalSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   } else if (user == "Argentina") {
    image(Argentina, 0, playerY);
    rect(0, playerY, 10, 100);
   } else if (user == "ArgentinaSmall") {
    image(ArgentinaSmall, 0, playerY);
    rect(0, playerY, 10, 50);
   }

   //Opponent
   if (tourneyBegin == false) {
    if (cpuUser == "") {
     if (chooser == 1) {
      cpuUser = "Italy";
     } else if (chooser == 2) {
      cpuUser = "UK";
     } else if (chooser == 3) {
      cpuUser = "USA";
     } else if (chooser == 4) {
      cpuUser = "Germany";
     } else if (chooser == 5) {
      cpuUser = "Spain";
     } else if (chooser == 6) {
      cpuUser = "China";
     } else if (chooser == 7) {
      cpuUser = "Canada";
     } else if (chooser == 8) {
      cpuUser = "Russia";
     } else {
      cpuUser = "switzerland";
     }
    }
   }

   //Choose Opponent's Image
   noFill();
   strokeWeight(1);
   if (cpuUser == "Italy") {
    image(Italy, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "ItalySmall") {
    image(ItalySmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "China") {
    image(China, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "ChinaSmall") {
    image(ChinaSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "ChinaBig") {
    image(ChinaBig, 640, CPUY - 50);
    rect(640, CPUY - 50, 10, 200);
   } else if (cpuUser == "Canada") {
    image(Canada, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "CanadaSmall") {
    image(CanadaSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "UK") {
    image(UK, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "UKSmall") {
    image(UKSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "USA") {
    image(USA, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "USASmall") {
    image(USASmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Spain") {
    image(Spain, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "SpainSmall") {
    image(SpainSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Russia") {
    image(Russia, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "RussiaSmall") {
    image(RussiaSmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Germany") {
    image(Germany, 640, CPUY);
    rect(640, CPUY, 10, 100);
   } else if (cpuUser == "GermanySmall") {
    image(GermanySmall, 640, CPUY);
    rect(640, CPUY, 10, 50);
   } else if (cpuUser == "Australia") {
    image(UK, 640, CPUY);
    rect(640, CPUY, 10, 100);
    image(Australia, 640, HelperY);
    rect(640, HelperY, 10, 100);
   } else if (cpuUser == "Team World") {
    image(World, 640, CPUY);
    rect(640, CPUY, 10, 150);
   } else {
    image(switzerland, 640, CPUY);
    rect(640, CPUY, 10, 100);
   }


   //Ball
   strokeWeight(1);
   if (colourOrd == 0) {
    fill(255, 255, 0);
   } else if (colourOrd == 1) {
    fill(255, 11, 17);
   } else if (colourOrd == 2) {
    fill(0, 0, 255);
   } else if (colourOrd == 3) {
    fill(30, 96, 0);
   } else if (colourOrd == 4) {
    fill(255, 87, 6);
   } else if (colourOrd == 5) {
    fill(87, 38, 87);
   } else if (colourOrd == 6) {
    fill(254, 18, 154);
   } else if (colourOrd == 7) {
    fill(127, 127, 127);
   }

   ellipse(ballX, ballY, 20, 20);

   if (FrancePower == true & whoHit == true) {
    strokeWeight(1);
    fill(255, 225, 0);
    ellipse(ballX, ballY2, 20, 20);
    fill(225, 255, 10);
    ellipse(ballX, ballY3, 20, 20);
   } else {
    ballY2 = ballY - 50;
    ballY3 = ballY + 50;
    ballD2 = ballD * .8;
    ballD3 = ballD * 1.4;
   }

   if (PortugalPower == true) {

    if (ballX > 50) {
     image(bullet, bulletX, bulletY);
     image(bullet, bulletX, bulletY + 60);
     image(bullet, bulletX, bulletY - 60);
     bulletX += 6;
    } else if (bulletX > 680) {
     bulletX = -30;
     bulletY = playerY + 35;
    }






   }

   //Bug fix (ball stuck in the rafters)
   if (ballY + .1 < 0) {
    ballY = 3;
    ballD = -ballD;
   }

   //Move Player paddle
   if (ItalyPower == true) {
    speeder = 17;
   } else if (SpainPowerCPU == true & pause == 1) {
    speeder = speeder / 1.0015;
   } else if (SpainPowerCPU == true) {} else {
    speeder = 7 + faster;
   }
   playerY += (down - up) * speeder;

   //Slow down CPU if Spain's power is active
   if (SpainPower == true & pause == 1) {
    cpuSpeed = cpuSpeed / 1.0015;
   } else if (SpainPower == true & pause == -1) {} else if (ItalyPowerCPU == false & roundPlay == 1) {
    cpuSpeed = 7 - detract;
   } else if (ItalyPowerCPU == false & roundPlay == 2) {
    cpuSpeed = 8 - detract;
   } else if (ItalyPowerCPU == false & roundPlay == 3) {
    cpuSpeed = 9 - detract;
   } else if (ItalyPowerCPU == false & roundPlay == 4) {
    cpuSpeed = 10 - detract;
   } else if (ItalyPowerCPU == false) {
    cpuSpeed = 7;
   }

   if (FrancePower == true & roundPlay == 1 & whoHit == true) {
    cpuSpeed = (7 - detract) / 2;
   } else if (FrancePower == true & roundPlay == 2 & whoHit == true) {
    cpuSpeed = (8 - detract) / 2;
   } else if (FrancePower == true & roundPlay == 3 & whoHit == true) {
    cpuSpeed = (9 - detract) / 2;
   } else if (FrancePower == true & roundPlay == 4 & whoHit == true) {
    cpuSpeed = (10 - detract) / 2;
   }


   if (ArgentinaPower == true & ballX > 500 & ballX < 550) {
    cpuSpeed = -1.5 * cpuSpeed;
   }
   //THE CODE WHERE THE CPU MOVES!!! FOR FUTURE REFERENCE
   if (CPUY > ballY - 50) {
    CPUY -= cpuSpeed;
   } else if (CPUY < ballY - 50) {
    CPUY += cpuSpeed;
   }



   //If ball hits boundary reverse direction
   
   if (ballY <= 0 | ballY > 500) {
	
	ballHitSound.play();
    ballD = -ballD;
   }
   if (ballY2 < 0 | ballY2 > 500) {
	 //ballHitSound.play();
    ballD2 = -ballD2;
   }
   if (ballY3 < 0 | ballY3 > 500) {
	  //ballHitSound.play();
    ballD3 = -ballD3;
   }

   if (BrazilPower == true & whoHit == false) {

    if (ballY >= playerY & ballY <= playerY + 100) {
     ballD = 0;
    } else if (ballY >= playerY) {
     ballD = -(abs(ballD) + .5);
    } else if (ballY <= playerY + 100) {
     ballD = abs(ballD) + .5;
    }

   }

   ballY += ballD;
   ballY2 += ballD2;
   ballY3 += ballD3;

   //Heat (hit) Detection
   if (playerY + 100 >= ballY & ballY >= playerY & ballX <= 10 & user != "ChinaBig" & GermanyPowerCPU == false) {
	   
	ballHitPaddleSound.play();
    ballDirection = false;

    if (user == "Italy" & power == true & powerActivate == true) {
     ballHits += 10;
    } else {
     ballHits += (1 * PStrength);
    }

    if (ballY - playerY > 50) {
     ballD = ((ballY - playerY) / 50 + 3);
    } else if (ballY - playerY < 50) {
     ballD = -((ballY - playerY) / playerY * 20 + 2);
     if (ballY - playerY == 0) {
      ballD = -4;
     }
    } else if (ballY - playerY == 50) {
     ballD = 0;
    }
    whoHit = true;
   }

   //ChinaBIG PADDLE FOR USER
   if (playerY + 200 >= ballY & ballY >= playerY & ballX <= 10 & user == "ChinaBig") {
	ballHitPaddleSound.play();
    ballDirection = false;
    ballHits += (1 * PStrength);

    if (ballY - playerY > 100) {
     ballD = ((ballY - playerY) / 100 + 3);
    } else if (ballY - playerY < 100) {
     ballD = -((ballY - playerY) / playerY * 20 + 2);
     if (ballY - playerY == 0) {
      ballD = -4;
     }
    } else if (ballY - playerY == 100) {
     ballD = 0;
    }
    whoHit = true;
   }

   //SMALL PADDLES FOR USER - GermanyPowerCPU==true
   if (playerY + 50 >= ballY & ballY >= playerY & ballX <= 10 & user != "ChinaBig" & GermanyPowerCPU == true) {
	ballHitPaddleSound.play();
    ballDirection = false;
    ballHits += (1 * PStrength);

    if (ballY - playerY > 25) {
     ballD = ((ballY - playerY) / 25 + 3);
    } else if (ballY - playerY < 25) {
     ballD = -((ballY - playerY) / playerY * 20 + 2);
     if (ballY - playerY == 0) {
      ballD = -4;
     }
    } else if (ballY - playerY == 25) {
     ballD = 0;
    }
    whoHit = true;
   }

   //REGULAR CPU SHOTS
   if (CPUY + 100 >= ballY & ballY >= CPUY & ballX >= 640 & GermanyPower == false & cpuUser != "ChinaBig" & cpuUser != "Team World") {
    ballHitPaddleSound.play();
	ballDirection = true;

    if (cpuUser == "Italy" & power == false & powerActivate == true) {
     ballHits += 10;
    } else {
     ballHits = (ballHits / CStrength);
    }

    if (ballY - CPUY > 50) {
     ballD = ((ballY - CPUY) / 50 + 3);
    } else if (ballY - CPUY < 50) {
     ballD = -((ballY - CPUY) / CPUY * 20 + 2);
     if (ballY - CPUY == 0) {
      ballD = -4;
     }
    } else if (ballY - CPUY == 50) {
     ballD = 0;
    }
    whoHit = false;
   }

   if (CPUY + 150 >= ballY & ballY >= CPUY & ballX >= 640 & GermanyPower == false & cpuUser == "Team World") {
    ballHitPaddleSound.play();
	ballDirection = true;
    ballHits = (ballHits / CStrength);

    if (ballY - CPUY > 75) {
     ballD = ((ballY - CPUY) / 75 + 3);
    } else if (ballY - CPUY < 75) {
     ballD = -((ballY - CPUY) / CPUY * 20 + 2);
     if (ballY - CPUY == 0) {
      ballD = -4;
     }
    } else if (ballY - CPUY == 75) {
     ballD = 0;
    }
    whoHit = false;
   }

   //ChinaBIG FOR CPU
   if (CPUY + 150 >= ballY & ballY >= CPUY - 50 & ballX >= 640 & GermanyPower == false & cpuUser == "ChinaBig") {
    ballHitPaddleSound.play();
	ballDirection = true;
    ballHits = (ballHits / CStrength);

    if (ballY - CPUY > 100) {
     ballD = ((ballY - CPUY) / 100 + 3);
    } else if (ballY - CPUY < 100) {
     ballD = -((ballY - CPUY) / CPUY * 20 + 2);
     if (ballY - CPUY == 0) {
      ballD = -4;
     }
    } else if (ballY - CPUY == 100) {
     ballD = 0;
    }
    whoHit = false;
   }

   //SMALL PADDLES FOR CPU
   if (CPUY + 50 >= ballY & ballY >= CPUY & ballX >= 640 & GermanyPower == true) {
    ballHitPaddleSound.play();
	ballDirection = true;
    ballHits = (ballHits / CStrength);

    if (ballY - CPUY > 25) {
     ballD = ((ballY - CPUY) / 25 + 3);
    } else if (ballY - CPUY < 25) {
     ballD = -((ballY - CPUY) / CPUY * 20 + 2);
     if (ballY - CPUY == 0) {
      ballD = -4;
     }
    } else if (ballY - CPUY == 25) {
     ballD = 0;
    }
    whoHit = false;
   }

   //Australia PADDLE FOR THE USER
   if (HelperY + 100 >= ballY & ballY >= HelperY & ballX <= 0 & powerActivate == true & power == true & user == "Australia") {
    ballHitPaddleSound.play();
	ballDirection = false;
    ballHits += 1;

    if (ballY - HelperY > 50) {
     ballD = ((ballY - HelperY) / 50 + 3);
    } else if (ballY - HelperY < 50) {
     ballD = -((ballY - HelperY) / HelperY * 20 + 2);
     if (ballY - HelperY == 0) {
      ballD = -4;
     }
    } else if (ballY - HelperY == 50) {
     ballD = 0;
    }
    whoHit = true;
   }

   //Australia paddle for the CPU
   if (HelperY + 100 >= ballY & ballY >= HelperY & ballX >= 640 & powerActivate == true & power == false & cpuUser == "Australia") {
    ballHitPaddleSound.play();
	ballDirection = true;
    ballHits += 1;

    if (ballY - HelperY > 50) {
     ballD = ((ballY - HelperY) / 50 + 3);
    } else if (ballY - HelperY < 50) {
     ballD = -((ballY - HelperY) / HelperY * 20 + 2);
     if (ballY - HelperY == 0) {
      ballD = -4;
     }
    } else if (ballY - HelperY == 50) {
     ballD = 0;
    }
    whoHit = false;
   }

   if (ballDirection == true) {
    ballX -= speed + 0.3 * ballHits;
   }
   if (ballDirection == false) {
    ballX += speed + 0.3 * ballHits;
   }

   //If the ball hits the wall of snow, slow down and go back
   if (ballX <= 0 & CanadaPower == true & power == true & powerActivate == true) {
    ballHitPaddleSound.play();
	ballDirection = false;
    whoHit = true;
    ballD = ballD / 5;
    ballHits = ballHits / 4;
   }
   if (ballX >= 640 & CanadaPowerCPU == true & power == false & powerActivate == true) {
    ballHitPaddleSound.play();
	ballDirection = true;
    whoHit = false;
    ballD = ballD / 5;
    ballHits = ballHits / 4;
   }

   //Scoring
   if (ballX < -20) {
	   goalScoredSound.play();
    CPUScore += 1;
    ballX = 315;
    ballHits = 0;
    ballD = 0;
    ballY = 250;
   }
   if (ballX > 670) {
	   goalScoredSound.play();
    playerScore += 1;
    ballX = 315;
    ballHits = 0;
    ballD = 0;
    ballY = 250;

    if (powerActivate == true & power == true) {
     saotome += 1;
    } else {
     saotome = 0;
    }

    if (saotome >= 3) {
     trifecta = true;
     if (efg == false) {
      lifeAchievements += 1;
      efg = true;
     }
    }

    if (cpuUser == "ChinaBig") {
     dvsg = true;
     if (hij == false) {
      lifeAchievements += 1;
      hij = true;
     }
    }

    if (cpuUser == "Australia") {
     onebeatstwo = true;
     if (klm == false) {
      lifeAchievements += 1;
      klm = true;
     }
    }

    if (user == "CanadaSmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "ChinaSmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "GermanySmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "ItalySmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "SpainSmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "RussiaSmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "USASmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "UKSmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "FranceSmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    } else if (user == "BrazilSmall") {
     smallbutmighty = true;
     if (tuv == false) {
      lifeAchievements += 1;
      tuv = true;
     }
    }

   }

   //Record what needs to be recorded for powers
   if (powerActivate == false) {
    target = CPUY;
    targetUSER = playerY;
   }


   //Moves Australian Paddle
   if (HelperY > ballY - 50) {
    HelperY -= 11;
   } else if (HelperY < ballY - 50) {
    HelperY += 11;
   }

   //Used to Draw Aura around paddles
   if (SpainPower == true & powerActivate == true & power == true) {
    noFill();
    strokeWeight(4);
    stroke(102, 255, 255);
    rect(640, CPUY, 10, 100);
   }
   if (ItalyPower == true & powerActivate == true & power == true) {
    noFill();
    strokeWeight(4);
    stroke(255, 85, 0);
    rect(0, playerY, 10, 100);
   }
   if (SpainPowerCPU == true & powerActivate == true & power == false) {
    noFill();
    strokeWeight(4);
    stroke(102, 255, 255);
    if (cpuUser == "Team World") {
     rect(0, playerY, 10, 50);
    } else {
     rect(0, playerY, 10, 100);
    }
   }
   if (ItalyPowerCPU == true & powerActivate == true & power == false) {
    noFill();
    strokeWeight(4);
    stroke(255, 85, 0);
    if (cpuUser == "Team World") {
     rect(640, CPUY, 10, 150);
    } else {
     rect(640, CPUY, 10, 100);
    }
   }
   if (ArgentinaPower == true) {
    noFill();
    strokeWeight(4);
    stroke(204, 0, 255);
    if (cpuUser != "Team World") {
     rect(640, CPUY, 10, 100);
    } else {
     rect(640, CPUY, 10, 150);
    }
   }
   if (BrazilPower == true) {
    noFill();
    strokeWeight(4);
    stroke(162);
    rect(0, playerY, 10, 100);
   }

   //Activate powers
   if (powerActivate == true) {
    if (power == false & cpuUser == "Russia") {
     image(ironCurtain, 75, 0);
    } else if (power == false & cpuUser == "China" | cpuUser == "ChinaSmall" & power == false) {
     cpuUser = "ChinaBig";
    } else if (power == false & cpuUser == "Italy" | cpuUser == "ItalySmall" & power == false) {
     ItalyPowerCPU = true;
    } else if (power == false & cpuUser == "Spain" | cpuUser == "SpainSmall" & power == false) {
     SpainPowerCPU = true;
    } else if (power == false & cpuUser == "Canada" | cpuUser == "CanadaSmall" & power == false) {
     CanadaPowerCPU = true;
    } else if (power == false & cpuUser == "USA" | cpuUser == "USASmall" & power == false) {
     playerY = targetUSER;
    } else if (power == false & cpuUser == "UK" | cpuUser == "UKSmall" & power == false) {
     cpuUser = "Australia";
    } else if (power == false & cpuUser == "Team World") {
     ItalyPowerCPU = true;
     SpainPowerCPU = true;
     CanadaPowerCPU = true;
     GermanyPowerCPU = true;
     image(ironCurtain, 75, 0);
     if (user == "Russia") {
      user = "RussiaSmall";
     } else if (user == "China") {
      user = "ChinaSmall";
     } else if (user == "Canada") {
      user = "CanadaSmall";
     } else if (user == "UK") {
      user = "UKSmall";
     } else if (user == "USA") {
      user = "USASmall";
     } else if (user == "Italy") {
      user = "ItalySmall";
     } else if (user == "Germany") {
      user = "GermanySmall";
     } else if (user == "Spain") {
      user = "SpainSmall";
     } else if (user == "France") {
      user = "FranceSmall";
     } else if (user == "Brazil") {
      user = "BrazilSmall";
     }
    } else if (power == false & cpuUser == "Germany" | cpuUser == "GermanySmall" & power == false) {
     GermanyPowerCPU = true;
     if (user == "Russia") {
      user = "RussiaSmall";
     } else if (user == "China") {
      user = "ChinaSmall";
     } else if (user == "Canada") {
      user = "CanadaSmall";
     } else if (user == "UK") {
      user = "UKSmall";
     } else if (user == "USA") {
      user = "USASmall";
     } else if (user == "Italy") {
      user = "ItalySmall";
     } else if (user == "Germany") {
      user = "GermanySmall";
     } else if (user == "Spain") {
      user = "SpainSmall";
     } else if (user == "France") {
      user = "FranceSmall";
     } else if (user == "Brazil") {
      user = "BrazilSmall";
     } else if (user == "Portugal") {
      user = "PortugalSmall";
     } else if (user == "Argentina") {
      user = "ArgentinaSmall";
     }
    }
    //TIME TO RUN UP ON A MAN AKA TIME FOR USER POWER
    else if (power == true & user == "Russia" | user == "RussiaSmall" & power == true) {
     image(ironCurtain, 300, 0);
     RussiaPower = true;
    } else if (power == true & user == "China" | user == "ChinaSmall" & power == true) {
     user = "ChinaBig";
    } else if (power == true & user == "USA" | user == "USASmall" & power == true) {
     CPUY = target;
    } else if (power == true & user == "UK" | user == "UKSmall" & power == true) {
     user = "Australia";
    } else if (power == true & user == "Italy" | user == "ItalySmall" & power == true) {
     ItalyPower = true;
    } else if (power == true & user == "Spain" | user == "SpainSmall" & power == true) {
     SpainPower = true;
    } else if (power == true & user == "Canada" | user == "CanadaSmall" & power == true) {
     CanadaPower = true;
    } else if (power == true & user == "France" | user == "FranceSmall" & power == true) {
     FrancePower = true;
    } else if (power == true & user == "Brazil" | user == "BrazilSmall" & power == true) {
     BrazilPower = true;
    } else if (power == true & user == "Portugal" | user == "PortugalSmall" & power == true) {
     PortugalPower = true;
    } else if (power == true & user == "Argentina" | user == "ArgentinaSmall" & power == true) {
     ArgentinaPower = true;
    } else if (power == true & user == "Germany" | user == "GermanySmall" & power == true) {
     GermanyPower = true;
     if (cpuUser == "Russia") {
      cpuUser = "RussiaSmall";
     } else if (cpuUser == "USA") {
      cpuUser = "USASmall";
     } else if (cpuUser == "UK") {
      cpuUser = "UKSmall";
     } else if (cpuUser == "Germany") {
      cpuUser = "GermanySmall";
     } else if (cpuUser == "Spain") {
      cpuUser = "SpainSmall";
     } else if (cpuUser == "Canada") {
      cpuUser = "CanadaSmall";
     } else if (cpuUser == "China") {
      cpuUser = "ChinaSmall";
     } else if (cpuUser == "Italy") {
      cpuUser = "ItalySmall";
     }
    }
   }

   //Stop computer movement underneath the iron curtain
   if (ballX >= 300 & ballX <= 600 & RussiaPower == true & powerActivate == true) {
    CPUY = target2;
   } else {
    target2 = CPUY;
   }

   //Azerbaijan
   if (PortugalPower == true & bulletX >= 610 & bulletX < 650 & bulletY < CPUY + 130 & bulletY > CPUY - 70) {
    shot = true;
   }

   if (shot == false) {
    target3 = CPUY;
   } else if (shot == true) {
    CPUY = target3;
   }

   if (bulletX > 1200 | bulletX < 50) {
    shot = false;
   }

   if (ItalyPowerCPU == true & powerActivate == true) {
    cpuSpeed = 17;
   }

   //USED TO SET TIMES WHEN THE POWERUP SHOULD END. DOES NOT WORK, WHY?
   if (powerActivate == true & powerUP == true) {
    if (power == true) {
     if (user == "USA") {
      moneyTime = timer - 5;
     } else if (user == "China" | user == "ChinaBig") {
      moneyTime = timer - 25;
     } else if (user == "Germany") {
      moneyTime = timer - 20;
     } else if (user == "UK" | user == "Australia") {
      moneyTime = timer - 25;
     } else if (user == "Russia") {
      moneyTime = timer - 20;
     } else if (user == "Canada") {
      moneyTime = timer - 20;
     } else if (user == "Italy") {
      moneyTime = timer - 20;
     } else if (user == "Spain") {
      moneyTime = timer - 20;
     } else if (user == "France") {
      moneyTime = timer - 20;
     } else if (user == "Brazil") {
      moneyTime = timer - 20;
     } else if (user == "Portugal") {
      moneyTime = timer - 30;
     } else if (user == "Argentina") {
      moneyTime = timer - 25;
     }
    } else if (power == false) {
     if (cpuUser == "China" | cpuUser == "ChinaBig") {
      moneyTime = timer - 25;
     } else if (cpuUser == "Germany") {
      moneyTime = timer - 20;
     } else if (cpuUser == "UK" | cpuUser == "Australia") {
      moneyTime = timer - 25;
     } else if (cpuUser == "Russia") {
      moneyTime = timer - 20;
     } else if (cpuUser == "Canada") {
      moneyTime = timer - 20;
     } else if (cpuUser == "Italy") {
      moneyTime = timer - 20;
     } else if (cpuUser == "Spain") {
      moneyTime = timer - 20;
     } else if (cpuUser == "USA") {
      moneyTime = timer - 5;
     }
    }
    powerUP = false;
   }
   //End power ups by using the POWER DEACTIVATOR
   //if(powerDeactivator==true){
   if (moneyTime - timer > 0) {
    if (user == "ChinaBig") {
     user = "China";
    }
    if (user == "Australia") {
     user = "UK";
    }
    if (cpuUser == "Australia") {
     cpuUser = "UK";
    }

    if (cpuUser == "ChinaSmall") {
     cpuUser = "China";
    }
    if (cpuUser == "CanadaSmall") {
     cpuUser = "Canada";
    }
    if (cpuUser == "ItalySmall") {
     cpuUser = "Italy";
    }
    if (cpuUser == "SpainSmall") {
     cpuUser = "Spain";
    }
    if (cpuUser == "RussiaSmall") {
     cpuUser = "Russia";
    }
    if (cpuUser == "USASmall") {
     cpuUser = "USA";
    }
    if (cpuUser == "UKSmall") {
     cpuUser = "UK";
    }
    if (cpuUser == "GermanySmall") {
     cpuUser = "Germany";
    }
    if (cpuUser == "ChinaBig") {
     cpuUser = "China";
    }

    if (user == "ChinaSmall") {
     user = "China";
    }
    if (user == "CanadaSmall") {
     user = "Canada";
    }
    if (user == "ItalySmall") {
     user = "Italy";
    }
    if (user == "SpainSmall") {
     user = "Spain";
    }
    if (user == "RussiaSmall") {
     user = "Russia";
    }
    if (user == "USASmall") {
     user = "USA";
    }
    if (user == "UKSmall") {
     user = "UK";
    }
    if (user == "GermanySmall") {
     user = "Germany";
    }
    if (user == "ChinaBig") {
     user = "China";
    }
    if (user == "FranceSmall") {
     user = "France";
    }
    if (user == "BrazilSmall") {
     user = "Brazil";
    }
    if (user == "PortugalSmall") {
     user = "Portugal";
    }
    if (user == "ArgentinaSmall") {
     user = "Argentina";
    }

    ItalyPower = false;
    SpainPower = false;
    GermanyPower = false;
    CanadaPower = false;
    RussiaPower = false;
    FrancePower = false;
    BrazilPower = false;
    PortugalPower = false;
    shot = false;
    ArgentinaPower = false;

    ItalyPowerCPU = false;
    SpainPowerCPU = false;
    GermanyPowerCPU = false;
    CanadaPowerCPU = false;

    powerActivate = false;
   }


   if (pause == -1 | timer <= 0) {

    ballX = targetBallX;
    ballY = targetBallY;
    CPUY = targetPaddleLeft;
    playerY = targetPaddleRight;
    speeder = 0;
    timex = millis() - timePass * 1000;

    if (pause == -1) {
     screenNum = 3;
     stroke(0);
     image(pauseMenu, 250, 200);

     if (mouseX >= 267 & mouseX <= 383 & mouseY >= 228 & mouseY <= 285) {
        newMenuSelection("quickPlayMainMenu");
      noFill();
      strokeWeight(4);
      stroke(255, 0, 0);
      rect(267, 228, 116, 57);
      stroke(0);
     }
    }

    if (mouseX >= 267 & mouseX <= 384 & mouseY >= 345 & mouseY <= 373) {
        newMenuSelection("quickPlayRestart");
     noFill();
     strokeWeight(4);
     stroke(255, 0, 0);
     rect(267, 345, 117, 28);
     if (mouseIsPressed) {
      //CODE TO RESTART
     }
    }

   } else {
    targetBallX = ballX;
    targetBallY = ballY;
    targetPaddleLeft = CPUY;
    targetPaddleRight = playerY;
   }

	
   //GAME ENDS CODE
   if (timer <= 0) {
    timer = 0;
    powerActivate = false;
	
	// set to false and then set to true after the mouse is clicked.
	//gameOverWinSound.play();

    if (playerScore > CPUScore & winorlose == false) {
     lifeWins += 1;
     winorlose = true;
    } else if (playerScore < CPUScore & winorlose == false) {
     lifeLosses += 1;
     winorlose = true;
    } else if (playerScore == CPUScore & winorlose == false) {
     lifeTies += 1;
     winorlose = true;
    }


    if (noHelp == false & playerScore > CPUScore) {
     nohelpneeded = true;
     if (nop == false) {
      lifeAchievements += 1;
      nop = true;
     }
    }

    if (user == "Canada") {
     playascanada = true;
    } else if (user == "China") {
     playaschina = true;
    } else if (user == "Italy") {
     playasitaly = true;
    } else if (user == "Germany") {
     playasgermany = true;
    } else if (user == "Russia") {
     playasrussia = true;
    } else if (user == "Spain") {
     playasspain = true;
    } else if (user == "UK") {
     playasuk = true;
    } else if (user == "USA") {
     playasusa = true;
    }


    fill(0);
    stroke(255, 255, 0);
    rect(170, 200, 350, 200);
    stroke(0);
    fill(255);
    if (playerScore - CPUScore >= 3) {
     blowout = true;
     if (mno == false) {
      lifeAchievements += 1;
      mno = true;
     }
    }
    if (playerScore >= 5) {
     offensivethreat = true;
     if (pqr == false) {
      lifeAchievements += 1;
      pqr = true;
     }
    }
    if (CPUScore > playerScore) {
     text(cpuUser + " wins!", 265, 250);
    } else if (playerScore > CPUScore) {
     text(user + " wins!", 265, 250);
    } else if (playerScore == CPUScore) {
     text("Tie game!", 265, 250);
    }
    textSize(18);
    text("Click the mouse to end the game", 200, 300);
    //GAME ENDING CODE
    if (mouseIsPressed) {
     lifeGoals += playerScore;
     lifeLowes += CPUScore;

     if (tourneyBegin == true) {

      if (roundPlay < 5) {
       cash += (playerScore * roundPlay * 15);
      }


      if (playerScore > CPUScore) {
       if (roundPlay == 1) {
        roundPlay = 2;
       } else if (roundPlay == 2) {
        roundPlay = 3;
       } else if (roundPlay == 3) {
        roundPlay = 4;
       } else if (roundPlay == 4) {
        roundPlay = 5;
       }

      } else {
       isitflawed = true;
      }

      //All the reset bull shizer 
      tourneyBegin = true;
      serbia = false;
      serbia2 = false;
      slovakia = 0;
      bingoPlayers = false;
      game = false;
      whoHit = true;
      power = true;
      powerActivate = false;
      powOnce = true;
      powTwice = true;
      ItalyPower = false;
      SpainPower = false;
      up = 0;
      down = 0;
      up2 = 0;
      down2 = 0;
      speeder = 7;
      //cpuSpeed = 7;
      powerX = -150;
      powerY = -150;
      bingo = 1;
      target = 0;
      timex = 0;
      chooser = 0;
      ballX = 325;
      ballY = 250;
      ballHits = 1;
      speed = 3;
      ballDirection = true;
      ballD = 0;
      playerScore = 0;
      CPUScore = 0;
      playerY = 250;
      CPUY = 250;
      HelperY = 250;
      pause = 1;
      ItalyPower = false;
      SpainPower = false;
      GermanyPower = false;
      CanadaPower = false;

      ItalyPowerCPU = false;
      SpainPowerCPU = false;
      GermanyPowerCPU = false;
      CanadaPowerCPU = false;
      maceroni = false;
      noHelp = false;
      winorlose = false;




     } else if (tourneyBegin == false) {
      screenNum = 4;
      game = false;
      menu = true;
      tourney = false;
      cash = 0;
      roundPlay = 1;
      slovakia = 0;
      bingoPlayers = true;
      tourneyBegin = false;
      quickGame = false;
      whoHit = true;
      power = true;
      powerActivate = false;
      powOnce = true;
      powTwice = true;
      ItalyPower = false;
      SpainPower = false;
      screen = 0;
      up = 0;
      down = 0;
      up2 = 0;
      down2 = 0;
      speeder = 7;
      cpuSpeed = 7;
      powerX = -150;
      powerY = -150;
      bingo = 1;
      target = 0;
      timex = 0;
      chooser = 0;
      ballX = 325;
      ballY = 250;
      user = "";
      ballHits = 1;
      speed = 3;
      ballDirection = true;
      ballD = 0;
      playerScore = 0;
      CPUScore = 0;
      playerY = 250;
      CPUY = 250;
      HelperY = 250;
      pause = 1;
      cpuUser = "";
      ItalyPower = false;
      SpainPower = false;
      GermanyPower = false;
      CanadaPower = false;

      ItalyPowerCPU = false;
      SpainPowerCPU = false;
      GermanyPowerCPU = false;
      CanadaPowerCPU = false;
      pos = 0;

      a = 0;
      b = 0;
      c = 0;
      d = 0;
      e = 0;
      selectOnce = true;
      finalist = "";
      selectTwice = true;
      selectThird = true;
      selectFourth = true;
      selectLast = true;
      cash = 0;
      detract = 0;
      CStrength = 1;
      PStrength = 1;
      faster = 0;
      maceroni = false;
      isitflawed = false;
      indonesia = false;
      winorlose = false;
     }


    }

   }
  }
 } // End of game


 // PAUSE SCREEN FOR THE TOURNAMENT
 if (pause == -1 & tourney == true) {

  ballX = targetBallX;
  ballY = targetBallY;
  CPUY = targetPaddleLeft;
  playerY = targetPaddleRight;
  speeder = 0;
  timex = millis() - timePass * 1000;

  if (pause == -1) {
   stroke(0);
   image(pauseMenu2, 250, 200);

   //Main Menu
   if (mouseX >= 267 & mouseX <= 383 & mouseY >= 228 & mouseY <= 285) {
       newMenuSelection("tourneyMainMenu");
    noFill();
    strokeWeight(4);
    stroke(255, 0, 0);
    rect(267, 228, 116, 57);
    stroke(0);
   }
  }

  //Bracket
  if (mouseX >= 265 & mouseX <= 386 & mouseY >= 299 & mouseY <= 332) {
    newMenuSelection("tourneyBracket");
   noFill();
   strokeWeight(4);
   stroke(255, 0, 0);
   rect(265, 299, 121, 31);
  }

  //Restart
  if (mouseX >= 267 & mouseX <= 384 & mouseY >= 345 & mouseY <= 373) {
    newMenuSelection("tourneyRestartButton");
   noFill();
   strokeWeight(4);
   stroke(255, 0, 0);
   rect(267, 345, 117, 28);
   if (mouseIsPressed) {
    //CODE TO RESTART
   }
  }

 }

 if (serbia == true) {
  strokeWeight(4);
  rect(181, 391, 80, 29);
 }

 if (serbia2 == true) {
  strokeWeight(4);
  rect(388, 391, 80, 29);
 }


 //CODE FOR THE ACHIEVEMENTS
 //ACHIEVEMENTS ARE THE LAST THINGS TO BE CODED (ABOVE ALL ELSE)

 if (cash >= 333) {
  makeitrain = true;
  if (abc == false) {
   lifeAchievements += 1;
   abc = true;
  }
 }

 if (lifeGoals >= 100) {
  goalmaster = true;
  if (ghi == false) {
   lifeAchievements += 1;
   ghi = true;
  }
 }

 if (floor((millis() / 1000) / 60) >= 60) {
  fathertime = true;
  if (jkl == false) {
   lifeAchievements += 1;
   jkl = true;
  }
 }

 if (playascanada == true & playaschina == true & playasgermany == true & playasitaly == true & playasrussia == true & playasspain == true & playasuk == true & playasusa == true) {
  diversityday = true;
  if (yza == false) {
   lifeAchievements += 1;
   yza = true;
  }
 }

 if (lifeChamps >= 3) {
  wvarhreeworlds = true;
  if (qrs == false) {
   lifeAchievements += 1;
   qrs = true;
  }
 }


 //INTRO DRAWN OVER EVERYTHING
 if (playIntro == true) {


  if (jab < 255) {
   tint(jab);
   image(introScreen, 0, 0);
   jab += 2;
  } else {
   tub += 2;
  }

  if (tub > 7000) {
   noTint();
   playIntro = false;
  }

 } else {
  jab = 0;
  tub = 0;
 }

} //End of draw

//When a key is pressed, change the location of the paddle
function keyPressed() {
 //if (key == CODED & maceroni == true) {
 if (maceroni == true) {
  if (keyCode == UP_ARROW) {
   up = 1;
  }
  if (keyCode == DOWN_ARROW) {
   down = 1;
  }
 }
 if (key == ' ' & game == true & maceroni == true | key == ' ' & tourney == true & maceroni == true) {
  pause = -pause;
  menuSound.play();
 }
}

function keyReleased() {
 //if (key == CODED & maceroni == true) {
 if (maceroni == true) {
  if (keyCode == UP_ARROW) {
   up = 0;
  }
  if (keyCode == DOWN_ARROW) {
   down = 0;
  }
 }
 if (key == 'w') {
  up2 = 0;
 }
 if (key == 's') {
  down2 = 0;
 }
}

//Make screen transitions smooth af
function mousePressed() {
 if (screen != 1 & screen != 5) {
  bingo = 1;
 }
}

function mouseClicked() {
 var doubleClick = false;

 //Change Field
 if (mouseX >= 72 & mouseX <= 180 & mouseY >= 221 & mouseY <= 348 & screenNum == 24 & doubleClick == false) {
  fieldOrd = 0;
  doubleClick = true;
 } else if (mouseX >= 208 & mouseX <= 316 & mouseY >= 221 & mouseY <= 348 & screenNum == 24 & doubleClick == false) {
  fieldOrd = 1;
  doubleClick = true;
 } else if (mouseX >= 345 & mouseX <= 453 & mouseY >= 221 & mouseY <= 348 & screenNum == 24 & doubleClick == false) {
  fieldOrd = 2;
  doubleClick = true;
 } else if (mouseX >= 481 & mouseX <= 589 & mouseY >= 221 & mouseY <= 348 & screenNum == 24 & doubleClick == false) {
  fieldOrd = 3;
  doubleClick = true;
 }

 //Change Ball Colour
 if (mouseX >= 94 & mouseY >= 215 & mouseX <= 173 & mouseY <= 292 & screenNum == 17 & doubleClick == false) {
  colourOrd = 0;
  doubleClick = true;
 }
 if (mouseX >= 227 & mouseY >= 215 & mouseX <= 306 & mouseY <= 292 & screenNum == 17 & doubleClick == false) {
  colourOrd = 1;
  doubleClick = true;
 }
 if (mouseX >= 353 & mouseY >= 215 & mouseX <= 432 & mouseY <= 292 & screenNum == 17 & doubleClick == false) {
  colourOrd = 2;
  doubleClick = true;
 }
 if (mouseX >= 493 & mouseY >= 215 & mouseX <= 572 & mouseY <= 292 & screenNum == 17 & doubleClick == false) {
  colourOrd = 3;
  doubleClick = true;
 }
 if (mouseX >= 94 & mouseY >= 310 & mouseX <= 173 & mouseY <= 387 & screenNum == 17 & doubleClick == false) {
  colourOrd = 4;
  doubleClick = true;
 }
 if (mouseX >= 227 & mouseY >= 310 & mouseX <= 306 & mouseY <= 387 & screenNum == 17 & doubleClick == false) {
  colourOrd = 5;
  doubleClick = true;
 }
 if (mouseX >= 353 & mouseY >= 310 & mouseX <= 432 & mouseY <= 387 & screenNum == 17 & doubleClick == false) {
  colourOrd = 6;
  doubleClick = true;
 }
 if (mouseX >= 493 & mouseY >= 310 & mouseX <= 572 & mouseY <= 387 & screenNum == 17 & doubleClick == false) {
  colourOrd = 7;
  doubleClick = true;
 }


 if (quickGame == true & game == false) {
  if (mouseX >= 487 & mouseX <= 650 & mouseY >= 135 & mouseY <= 286 & game == false) {
   user = "Italy";
   quickGame = false;
   game = true;
  } else if (mouseX >= 316 & mouseX <= 487 & mouseY >= 135 & mouseY <= 286 & game == false) {
   user = "USA";
   quickGame = false;
   game = true;
  } else if (mouseX >= 149 & mouseX <= 316 & mouseY >= 135 & mouseY <= 286 & game == false) {
   user = "Germany";
   quickGame = false;
   game = true;
  } else if (mouseX >= 0 & mouseX <= 149 & mouseY >= 135 & mouseY <= 286 & game == false) {
   user = "China";
   quickGame = false;
   game = true;
  } else if (mouseX >= 487 & mouseX <= 650 & mouseY >= 287 & mouseY <= 505 & game == false) {
   user = "Spain";
   quickGame = false;
   game = true;
  } else if (mouseX >= 316 & mouseX <= 487 & mouseY >= 287 & mouseY <= 505 & game == false) {
   user = "UK";
   quickGame = false;
   game = true;
  } else if (mouseX >= 149 & mouseX <= 316 & mouseY >= 287 & mouseY <= 505 & game == false) {
   user = "Canada";
   quickGame = false;
   game = true;
  } else if (mouseX >= 0 & mouseX <= 149 & mouseY >= 287 & mouseY <= 505 & game == false) {
   user = "Russia";
   quickGame = false;
   game = true;
  } else if (mouseX >= 146 & mouseY >= 0 & mouseX <= 306 & mouseY <= 135 & secretSel > 0) {
   user = "Brazil";
   quickGame = false;
   game = true;
  } else if (mouseX >= 306 & mouseY >= 0 & mouseX <= 466 & mouseY <= 135 & secretSel > 0) {
   user = "France";
   quickGame = false;
   game = true;
  } else if (mouseX >= 0 & mouseY >= 0 & mouseX <= 146 & mouseY <= 135 & secretSel > 1) {
   user = "Portugal";
   quickGame = false;
   game = true;
  } else if (mouseX >= 475 & mouseY >= 0 & mouseX <= 650 & mouseY <= 135 & secretSel > 1) {
   user = "Argentina";
   quickGame = false;
   game = true;
  }
  screen = 1;
  chooser = round(random(1, 8));
 }

 //Timer
	if(game == true & maceroni == true) {
		time = millis() - timex;
	}
	else {
		timex = millis();
	}
 
 //End of tournament
 if (roundPlay == 5) {
  roundPlay = 6;
  doubleClick = true;
 }
 if (roundPlay == 6 & doubleClick == false) {
  screenNum = 4;
  game = false;
  menu = true;
  tourney = false;
  cash = 0;
  roundPlay = 1;
  slovakia = 0;
  bingoPlayers = true;
  tourneyBegin = false;
  quickGame = false;
  whoHit = true;
  power = true;
  powerActivate = false;
  powOnce = true;
  powTwice = true;
  ItalyPower = false;
  SpainPower = false;
  screen = 0;
  up = 0;
  down = 0;
  up2 = 0;
  down2 = 0;
  speeder = 7;
  cpuSpeed = 7;
  powerX = -150;
  powerY = -150;
  bingo = 1;
  target = 0;
  timex = 0;
  chooser = 0;
  ballX = 325;
  ballY = 250;
  user = "";
  ballHits = 1;
  speed = 3;
  ballDirection = true;
  ballD = 0;
  playerScore = 0;
  CPUScore = 0;
  playerY = 250;
  CPUY = 250;
  HelperY = 250;
  pause = 1;
  cpuUser = "";
  ItalyPower = false;
  SpainPower = false;
  GermanyPower = false;
  CanadaPower = false;

  ItalyPowerCPU = false;
  SpainPowerCPU = false;
  GermanyPowerCPU = false;
  CanadaPowerCPU = false;
  pos = 0;

  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  selectOnce = true;
  finalist = "";
  selectTwice = true;
  selectThird = true;
  selectFourth = true;
  selectLast = true;
  cash = 0;
  detract = 0;
  CStrength = 1;
  PStrength = 1;
  faster = 0;
  maceroni = false;
  isitflawed = false;
  indonesia = false;
  winorlose = false;

 }
 if (screenNum == 2 | screenNum == 7) {
  screenNum = 1;
  doubleClick = true;
  menu = true;
 }
 if (screenNum == 4) {
  screenNum = 1;
  doubleClick = true;
 }

 //ACHIEVEMENTS SCREEN CLICKING MECHANICS
 if (screenNum == 8 & mouseX >= 13 & mouseX <= 145 & mouseY >= 462 & mouseY <= 494 & doubleClick == false) {
  screenNum = 1;
  doubleClick = true;
  menu = true;
 }

 if (screenNum == 8 & mouseX >= 503 & mouseX <= 635 & mouseY >= 462 & mouseY <= 494 & doubleClick == false) {
  screenNum = 14;
  doubleClick = true;
 }

 if (screenNum == 14 & mouseX >= 13 & mouseX <= 145 & mouseY >= 462 & mouseY <= 494 & doubleClick == false) {
  screenNum = 1;
  doubleClick = true;
  menu = true;
 }

 if (screenNum == 14 & mouseX >= 503 & mouseX <= 635 & mouseY >= 462 & mouseY <= 494 & doubleClick == false) {
  screenNum = 8;
  doubleClick = true;
 }

 //BONUS Screens for fun :) #advice screens
 if (mouseX >= 46 & mouseY >= 106 & mouseX <= 149 & mouseY <= 209 & screenNum == 8 & makeitrain == true & doubleClick == false) {
  screenNum = 15;
  doubleClick = true;
 } else if (mouseX >= 185 & mouseY >= 106 & mouseX <= 288 & mouseY <= 209 & screenNum == 8 & smartmove == true & doubleClick == false) {
  screenNum = 16;
  doubleClick = true;
 } else if (mouseX >= 323 & mouseY >= 107 & mouseX <= 426 & mouseY <= 210 & screenNum == 8 & goalmaster == true & doubleClick == false) {
  screenNum = 17;
  doubleClick = true;
 } else if (mouseX >= 467 & mouseY >= 108 & mouseX <= 570 & mouseY <= 211 & screenNum == 8 & fathertime == true & doubleClick == false) {
  screenNum = 18;
  doubleClick = true;
 } else if (mouseX >= 46 & mouseY >= 317 & mouseX <= 149 & mouseY <= 420 & screenNum == 8 & blowout == true & doubleClick == false) {
  screenNum = 19;
  doubleClick = true;
 } else if (mouseX >= 185 & mouseY >= 317 & mouseX <= 288 & mouseY <= 420 & screenNum == 8 & offensivethreat == true & doubleClick == false) {
  screenNum = 20;
  doubleClick = true;
 } else if (mouseX >= 323 & mouseY >= 318 & mouseX <= 426 & mouseY <= 421 & screenNum == 8 & readcredits == true & doubleClick == false) {
  screenNum = 21;
  doubleClick = true;
 } else if (mouseX >= 467 & mouseY >= 319 & mouseX <= 570 & mouseY <= 422 & screenNum == 8 & worldchamp == true & doubleClick == false) {
  screenNum = 22;
  doubleClick = true;
 }

 if (mouseX >= 46 & mouseY >= 106 & mouseX <= 149 & mouseY <= 209 & screenNum == 14 & diversityday == true & doubleClick == false) {
  screenNum = 23;
  doubleClick = true;
 } else if (mouseX >= 185 & mouseY >= 106 & mouseX <= 288 & mouseY <= 209 & screenNum == 14 & flawless == true & doubleClick == false) {
  screenNum = 24;
  doubleClick = true;
 } else if (mouseX >= 323 & mouseY >= 107 & mouseX <= 426 & mouseY <= 210 & screenNum == 14 & trifecta == true & doubleClick == false) {
  screenNum = 25;
  doubleClick = true;
 } else if (mouseX >= 467 & mouseY >= 108 & mouseX <= 570 & mouseY <= 211 & screenNum == 14 & onebeatstwo == true & doubleClick == false) {
  screenNum = 26;
  doubleClick = true;
 } else if (mouseX >= 46 & mouseY >= 317 & mouseX <= 149 & mouseY <= 420 & screenNum == 14 & dvsg == true & doubleClick == false) {
  screenNum = 27;
  doubleClick = true;
 } else if (mouseX >= 185 & mouseY >= 317 & mouseX <= 288 & mouseY <= 420 & screenNum == 14 & smallbutmighty == true & doubleClick == false) {
  screenNum = 28;
  doubleClick = true;
 } else if (mouseX >= 323 & mouseY >= 318 & mouseX <= 426 & mouseY <= 421 & screenNum == 14 & nohelpneeded == true & doubleClick == false) {
  screenNum = 29;
  doubleClick = true;
 } else if (mouseX >= 467 & mouseY >= 319 & mouseX <= 570 & mouseY <= 422 & screenNum == 14 & wvarhreeworlds == true & doubleClick == false) {
  screenNum = 30;
  doubleClick = true;
 }

 if (screenNum >= 15 & screenNum <= 22 & doubleClick == false) {
  screenNum = 8;
  doubleClick = true;
 }
 if (screenNum >= 23 & screenNum <= 30 & doubleClick == false) {
  screenNum = 14;
  doubleClick = true;
 }

 //KENTUCKY
 //Italy
 if (mouseX >= 487 & mouseX <= 650 & mouseY >= 135 & mouseY <= 286 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 99;
  user = "Italy";
  bingoPlayers = false;
 }
 //USA
 if (mouseX >= 316 & mouseX <= 487 & mouseY >= 135 & mouseY <= 286 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 98;
  user = "USA";
  bingoPlayers = false;
 }
 //Germany
 if (mouseX >= 149 & mouseX <= 316 & mouseY >= 135 & mouseY <= 286 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 97;
  user = "Germany";
  bingoPlayers = false;
 }
 //China
 if (mouseX >= 0 & mouseX <= 149 & mouseY >= 135 & mouseY <= 286 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 96;
  user = "China";
  bingoPlayers = false;
 }
 //Spain
 if (mouseX >= 487 & mouseX <= 650 & mouseY >= 287 & mouseY <= 505 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 95;
  user = "Spain";
  bingoPlayers = false;
 }
 //UK
 if (mouseX >= 316 & mouseX <= 487 & mouseY >= 287 & mouseY <= 505 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 94;
  user = "UK";
  bingoPlayers = false;
 }
 //Canada
 if (mouseX >= 149 & mouseX <= 316 & mouseY >= 287 & mouseY <= 505 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 93;
  user = "Canada";
  bingoPlayers = false;
 }
 //Russia
 if (mouseX >= 0 & mouseX <= 149 & mouseY >= 287 & mouseY <= 505 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 92;
  user = "Russia";
  bingoPlayers = false;
 }
 //Brazil
 if (mouseX >= 146 & mouseY >= 0 & mouseX <= 306 & mouseY <= 135 & secretSel > 0 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 101;
  user = "Brazil";
  bingoPlayers = false;
 }
 //France
 if (mouseX >= 306 & mouseY >= 0 & mouseX <= 466 & mouseY <= 135 & secretSel > 0 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 102;
  user = "France";
  bingoPlayers = false;
 }
 //Portugal
 if (mouseX >= 0 & mouseY >= 0 & mouseX <= 146 & mouseY <= 135 & secretSel > 1 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 103;
  user = "Portugal";
  bingoPlayers = false;
 }
 //Argentina
 if (mouseX >= 475 & mouseY >= 0 & mouseX <= 650 & mouseY <= 135 & secretSel > 1 & tourney == true & doubleClick == false & tourneyBegin == false & bingoPlayers == true) {
  screenNum = 100;
  user = "Argentina";
  bingoPlayers = false;
 }

 if (serbia == true) {
  screenNum = 88;
  bingoPlayers = true;
 }
 if (serbia2 == true) {
  tourneyBegin = true;
  serbia = false;
  serbia2 = false;
 }

 if (mouseY >= 457 & mouseY <= 487) {
  if (mouseX >= 484 & mouseX <= 634 & slovakia == 0 & doubleClick == false) {
   slovakia = 1;
   doubleClick = true;
  }
  if (mouseX >= 484 & mouseX <= 634 & slovakia == 1 & doubleClick == false) {
   slovakia = 2;
   doubleClick = true;
  }
  if (mouseX >= 484 & mouseX <= 634 & slovakia == 2 & doubleClick == false) {
   slovakia = 0;
   doubleClick = true;
  }
  if (mouseX >= 12 & mouseX <= 162 & slovakia == 0 & doubleClick == false) {
   slovakia = 2;
   doubleClick = true;
  }
  if (mouseX >= 12 & mouseX <= 162 & slovakia == 1 & doubleClick == false) {
   slovakia = 0;
   doubleClick = true;
  }
  if (mouseX >= 12 & mouseX <= 162 & slovakia == 2 & doubleClick == false) {
   slovakia = 1;
   doubleClick = true;
  }

 }

 if (mouseX >= 73 & mouseX <= 213 & mouseY >= 233 & mouseY <= 320 & slovakia == 1 & cash >= 20) {
  itemBoughtSound.play();
  PStrength += 2;
  cash -= 20;
 }
 if (mouseX >= 229 & mouseX <= 423 & mouseY >= 242 & mouseY <= 321 & slovakia == 1 & cash >= 40) {
  itemBoughtSound.play();
  CStrength += .25;
  cash -= 40;
 }
 if (mouseX >= 148 & mouseX <= 280 & mouseY >= 119 & mouseY <= 233 & slovakia == 1 & cash >= 30) {
  itemBoughtSound.play();
  faster += 1.1;
  cash -= 30;
 }
 if (mouseX >= 298 & mouseX <= 455 & mouseY >= 117 & mouseY <= 238 & slovakia == 1 & cash >= 80) {
  itemBoughtSound.play();
  detract += 1;
  cash -= 80;
 }


 if (mouseY >= 457 & mouseY <= 487 & mouseX >= 248 & mouseX <= 397 & slovakia == 0 & tourneyBegin == true) {
  game = true;
 }

 //CODE FOR BACK TO BRACKET
 if (mouseX >= 265 & mouseX <= 386 & mouseY >= 299 & mouseY <= 332 & doubleClick == false & pause == -1 & tourneyBegin == true) {
  powerActivate = false;
  tourneyBegin = true;
  serbia = false;
  serbia2 = false;
  slovakia = 0;
  bingoPlayers = false;
  game = false;
  whoHit = true;
  power = true;
  powerActivate = false;
  powOnce = true;
  powTwice = true;
  ItalyPower = false;
  SpainPower = false;
  up = 0;
  down = 0;
  up2 = 0;
  down2 = 0;
  speeder = 7;
  //cpuSpeed = 7;
  powerX = -150;
  powerY = -150;
  bingo = 1;
  target = 0;
  timex = 0;
  chooser = 0;
  ballX = 325;
  ballY = 250;
  ballHits = 1;
  speed = 3;
  ballDirection = true;
  ballD = 0;
  playerScore = 0;
  CPUScore = 0;
  playerY = 250;
  CPUY = 250;
  HelperY = 250;
  pause = 1;
  ItalyPower = false;
  SpainPower = false;
  GermanyPower = false;
  CanadaPower = false;

  ItalyPowerCPU = false;
  SpainPowerCPU = false;
  GermanyPowerCPU = false;
  CanadaPowerCPU = false;
  maceroni = false;
  noHelp = false;
  winorlose = false;
 }


 // MENU_OPTIONS
 if (mouseX >= 200 & mouseX <= 445 & screenNum == 1 & doubleClick == false & game == false) {
  if (mouseY >= 153 & mouseY <= 193) {
   menu = false;
   quickGame = true;
  }
  if (mouseY >= 220 & mouseY <= 260) {
   menu = false;
   tourney = true;
  }
  if (mouseY >= 400 & mouseY <= 440) {
   screenNum = 2;
  }
  if (mouseY >= 280 & mouseY <= 320) {
   screenNum = 7;
  }
  if (mouseY >= 340 & mouseY <= 380) {
   screenNum = 8;
  }
 }
 //RESTART CODER
 if (mouseX >= 267 & mouseX <= 384 & mouseY >= 345 & mouseY <= 373 & doubleClick == false & pause == -1) {
  CPUScore = 0;
  playerScore = 0;
  whoHit = true;
  power = true;
  powerActivate = false;
  ItalyPower = false;
  SpainPower = false;
  CanadaPower = false;
  RussiaPower = false;
  GermanyPower = false;
  pause = 1;
  ballD = 0;
  ballDirection = false;
  ballX = 325;
  ballY = 250;
  powerX = -150;
  powerY = -150;
  playerY = 250;
  CPUY = 250;
  HelperY = 250;
  timex = millis();
 }
 if (mouseX >= 267 & mouseX <= 383 & mouseY >= 228 & mouseY <= 285 & doubleClick == false & pause == -1) {
  screenNum = 4;
  game = false;
  menu = true;
  tourney = false;
  //TO RESET THE DRAFT ORDER DOES NOT WORK!
  //sortList = true;
  //countries = {"Canada","China","Germany","Italy","Russia","Spain","UK","USA"};
  //countryMix = {"","","","","","","",""};
  roundPlay = 1;
  slovakia = 0;
  bingoPlayers = true;
  tourneyBegin = false;
  quickGame = false;
  whoHit = true;
  power = true;
  powerActivate = false;
  powOnce = true;
  powTwice = true;
  ItalyPower = false;
  SpainPower = false;
  screen = 0;
  up = 0;
  down = 0;
  up2 = 0;
  down2 = 0;
  speeder = 7;
  cpuSpeed = 7;
  powerX = -150;
  powerY = -150;
  bingo = 1;
  target = 0;
  timex = 0;
  chooser = 0;
  ballX = 325;
  ballY = 250;
  user = "";
  ballHits = 1;
  speed = 3;
  ballDirection = true;
  ballD = 0;
  playerScore = 0;
  CPUScore = 0;
  playerY = 250;
  CPUY = 250;
  HelperY = 250;
  pause = 1;
  cpuUser = "";
  ItalyPower = false;
  SpainPower = false;
  GermanyPower = false;
  CanadaPower = false;

  ItalyPowerCPU = false;
  SpainPowerCPU = false;
  GermanyPowerCPU = false;
  CanadaPowerCPU = false;
  pos = 0;

  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  selectOnce = true;
  finalist = "";
  selectTwice = true;
  selectThird = true;
  selectFourth = true;
  selectLast = true;
  cash = 0;
  detract = 0;
  CStrength = 1;
  PStrength = 1;
  faster = 0;
  maceroni = false;
  isitflawed = false;
  winorlose = false;
 }

}

function mouseReleased() {
 bingo = 0;
 if (badBOI == 3) {
  badBOI = 9;
 }
}