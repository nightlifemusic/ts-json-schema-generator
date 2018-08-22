
export interface TemplateConfiguration {
    /**
     * @title Zone 1 Configuration
     */
    zone1: IZone1ConfigurationRequestParams;

    /**
    * @title Zone 2 Configuration
    */
    zone2: IZone2ConfigurationRequestParams;

    /**
    * @title Zone 3 Configuration
    */
    zone3: IZone3ConfigurationRequestParams;

}

export interface IZone2ConfigurationRequestParams extends IZone2ConfigurationRequestParamsShared, IZone2ConfigurationRequestParamsUnique {};
export interface IZone3ConfigurationRequestParams extends IZone3ConfigurationRequestParamsShared, IZone3ConfigurationRequestParamsUnique {};


export interface IZone3ConfigurationRequestParamsUnique {
    /**
     * @title Zone Name
     */
    "ZONE3": string;
}

export interface IZone3ConfigurationRequestParamsShared {
    /**
     * @title Playlist Colour
     */
    "PLAYLIST COLOUR": keyof IPlaylistColours;
    /**
     * @title Volume Control
     */
    "DISABLE CTRL_V": keyof IYesNo;
    /**
     * @title (Legacy) Default Video Source (When N2 Disabled)
     *
     */
    "DEFAULT VIDEO": number;
    /**
     * @title Explicit Video Content
     */
    "SWITCH IF NAUGHTY": keyof IYesNo;
    /**
     * @title Default Music List
     */
    "DEFAULT LIST": string;
    /**
     * @title Public Performance Restrictions
     */
    "PPCA FREE": keyof IPPCAFree;
    /**
     * @title (Legacy) N1 Priority Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     *
     */
    "PAID BILLBOARD DISPLAY TIME": number;
    /**
     * @title User App Credit Interval (secs)
     *
     * @minimum 0
     * @maximum 1000
     *
     */
    "USER APP CREDIT INTERVAL": number;
    /**
     * @title crowdDJ App Credit Limit
     *
     * @minimum 1
     * @maximum 10
     *
     */
    "USER APP CREDIT LIMIT": number;
    /**
     * @title Default crowdDJ Search
     */
    "DEFAULT APP SEARCH": keyof IDefaultAppSearch;
    /**
     * @title crowdDJ Kiosk Credit Refresh Interval (secs)
     *
     */
    "KIOSK CREDIT INTERVAL": IKioskCreditInterval;
    /**
     * @title crowdDJ Kiosk Credit Limit
     */
    "KIOSK CREDIT LIMIT": IKioskCreditLimit;
    /**
     * @title crowdDJ App Credit Refresh Interval (secs)
     */
    "USER APP CREDIT INTERVAL SECS": ICrowdDJCreditInterval;
    /**
     * @title Event Function Mode
     */
    "CLEAR DEFAULT": keyof IYesNo;
    /**
     * @title Scheduler Always On
     */
    "SCHEDULER ONLY": keyof IYesNo;
    /**
     * @title Album Cover Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     */
    "ALBUM COVER DISPLAY TIME": number;

    /**
     * @title Local Volume Percent
     */
    "LOCAL VOLUME %": number;

    /**
     * @title Auto Mix Seconds
     */
    "AUTO MIX SECONDS": number;

    /**
     * @title Skip Filter
     */
    "SKIP FILTER ENABLED": keyof IYesNo;

    /**
     * @title Preview Volume Percent
     * @minimum 0
     * @maximum 100
     *
     */
    "PREVIEW VOLUME %": number;

    /**
     * @title End Bit
     *
     */
    "END BIT": number;

    /**
     * @title Warn if Song Played Within # hrs
     *
     * @minimum 0
     */
    "WARNING HOURS": number;
}

export interface IZone2ConfigurationRequestParamsShared extends IZone3ConfigurationRequestParamsShared {
    /**
     * @title (Legacy) N1 User Advertising Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     * @default 0
     *
     */
    "BILLBOARD DISPLAY TIME": number;
    /**
     * @title Scrolling Text Display Ratio
     */
    "SCROLLING USER PERCENTAGE": keyof IScrollingTextDisplayRatio;
    /**
     * @title (Legacy) N1 User/Priority Ad Ratio
     */
    "ADVERTISING USER PERCENTAGE": keyof IAdvertisingUserPercentage;
    /**
     * @title Max Advertising Log
     */
    "MAX ADVERTISING LOG": number;
    /**
     * @title Synch Filter
     *
     */
    "SYNCH FILTER": number;
    /**
     * @title Cross Fade Seconds
     *
     */
    "CROSS FADE SECONDS": number;
    /**
     * @title Overlap in Seconds
     *
     */
    "OVERLAP IN SECONDS": number;
    /**
     * @title Cross Fade
     */
    "CROSS FADE ENABLED": keyof IYesNo;
    /**
     * @title Percent New Music
     */
    "% NEW MUSIC": number;
}

export interface IZone2ConfigurationRequestParamsUnique {
    /**
     * @title Zone Name
     */
    "ZONE2": string;
    /**
     * @title Use Zone 1 Ads
     */
    "USE ZONE1 ADS": keyof IYesNo;
}

export interface IZone1ConfigurationRequestParams extends IZone2ConfigurationRequestParamsShared {
    /**
     * @title Zone Name
     */
    ZONE1: string;
    /**
     * @title Jukebox
     */
    "JUKEBOX ENABLED": keyof IYesNo;
    /**
     * @title Music Video Clips
     */
    "(H)ard or (S)oft": keyof IHardSoft;
    /**
     * @title (Legacy) N1 3rd Input Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     */
    "3rd INPUT DISPLAY TIME": number;
    /**
     * @title (Legacy) N1 4th Input Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     * @default 0
     *
     */
    "4th INPUT DISPLAY TIME": number;
    /**
     * @title Jukebox Teaser Frequency (Every N Songs)
     * @minimum 0
     * @maximum 10
     *
     *
     */
    "BACKGROUND VIDEO GAPS": number;
    /**
     * @title Randomly Play Song Every # mins (Intermittent Jukebox)
     *
     * @minimum 0
     * @maximum 1000
     *
     */
    "RANDOM PLAY MINUTES": number;
    /**
     * @title Default Display for a Background Jukebox Song
     * @minimum 0
     * @maximum 1
     */
    "JUKEBOX BACKGROUND": number;
    /**
     * @title (Legacy) N1 Advertising Display Frequency (# Songs)
     * @minimum 1
     * @maximum 10
     *
     */
    "BILLBOARD FREQUENCY": number;
    /**
     * @title System Keys
     */
    "ENABLE SYSTEM KEYS": keyof IYesNo;
    /**
     * @title Number of Audio Zones
     */
    "MULTI ZONE ENABLED": keyof IMultiZoneEnabled;
    /**
     * @title Jukebox Credit Configuration
     */
    "A$1=2 B$1=1 C$2=1": keyof IJukeConfig;
    /**
     * @title Number of External Video Inputs
     *
     * @minimum 2
     * @maximum 4
     *
     */
    "NUMBER OF VIDEO INs": number;
    /**
     * @title Backup System Config
     */
    "BACKUP ENABLED": keyof IBackupEnabled;
    /**
     * @title Video Input 3 Display Name
     */
    "INPUT 3": string;
    /**
     * @title Video Input 4 Display Name
     */
    "INPUT 4": string;
    /**
     * @title Client Name
     */
    "CLIENT NAME": string;
    /**
     * @title Volume of Jukebox Background Song Plays (When Enabled)
     *
     * @minimum 0
     * @maximum 100
     *
     */
    "NEW BACKGROUND AUDIO %": number;
    /**
     * @title Volume of Promo Clips
     *
     * @minimum 0
     * @maximum 100
     *
     */
    "PROMO AUDIO %": number;
    /**
     * @title Volume of Normal Song Plays and Jukebox Selections (When Enabled)
     *
     * @minimum 0
     * @maximum 100
     *
     */
    "NORMAL AUDIO %": number;
    /**
     * @title System Code
     */
    "SYSTEM CODE": string;
    /**
     * @title FTP Enabled
     */
    "FTP ENABLED": keyof IYesNo;
    /**
     * @title Allow Advertising if Jukebox Song
     */
    "ALLOW JUKEBOX ADVERTISING": keyof IYesNo;
    /**
     * @title Network Install Path
     */
    "INP": string;
    /**
     * @title Monitor CPU Temperature
     */
    "CORE TEMP ENABLED": keyof ICoreTempEnabled;
    /**
     * @title Video Switcher Configuration
     */
    "CVS ENABLED": keyof IVideoSwitcher;
    /**
     * @title N2 Visuals Mode
     */
    "N2 VISUALS ENABLED": keyof IYesNo;
    /**
     * @title N2 Output 1 User Advertising Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     *
     */
    "N2 USER ADS TIME": number;
    /**
     * @title N2 Output 1 Display Frequency (0 - Never, 1 - Play Continuously, 2 - Play Every Second Clip, etc)
     *
     * @minimum 0
     * @maximum 99
     */
    "N2 FREQUENCY": keyof IN2Frequency;
    /**
     * @title Number of Video Outputs
     * @maximum 2
     * @minimum 0
     */
    "OUTPUTS": keyof IOutputs;
    /**
     * @title N2 Output 2 Ambient Visuals Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     *
     */
    "N2 AMBIENT TIME": number;
    /**
     * @title User Song Selections are Cleared by a Scheduler Change
     */
    "SCHEDULER CLEARS DJ": keyof IYesNo;
    /**
     * @title crowdDJ Kiosk Karaoke
     */
    "KARAOKE ENABLED": keyof IYesNo;
    /**
     * @title Network Install Master
     */
    "INSTALL MASTER": keyof IYesNo;
    /**
     * @title MMNL Guest Access
     */
    "ACCESS LEVEL": keyof IAccessLevel;
    /**
     * @title N2 Output 1 Ambient Visuals
     */
    "ZONE1 AMBIENT ENABLED": keyof IYesNo;
    /**
     * @title MMNL Guest Song Access
     */
    "DATABASE ACCESS": keyof IDatabaseAccess;
    /**
     * @title N2 Output1 Input 3 Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     *
     */
    "N2 INPUT 3 DISPLAY TIME": number;
    /**
     * @title N2 Output1 Input 4 Display Time (secs)
     *
     * @minimum 0
     * @maximum 1000
     *
     */
    "N2 INPUT 4 DISPLAY TIME": number;
    /**
     * @title Explicit Content Hidden (Global or Zone Based)
     */
    "GLOBAL HIDES": keyof IYesNo;
    /**
     * @title Low Resolution Music Video Clips
     */
    "SWITCH IF NMV": keyof IYesNo;
    /**
     * @title Ambient Visuals
     */
    "AMBIENT VISUALS": keyof IYesNo;
    /**
     * @title Restore DJ Songs Older Than 1 Hour
     */
    "RESTORE OLD": keyof IYesNo;
    /**
     * @title Automatically Eject DVD on Install
     */
    "EJECT DVD": keyof IYesNo;
    /**
     * @title Force Music Video Clip When Song is Selected by User
     */
    "ALWAYS SHOW": keyof IYesNo;
    /**
     * @title Delete All Songs in CULL list on Startup
     */
    "CULL ON RESTART": keyof IYesNo;
    /**
     * @title N2 Output 1 Priority Advertising Display Time (secs)
     */
    "N2 PRIORITY ADS TIME": number;

    /**
     * @title N2 Output 2 User Advertising Display Time (secs)
     */
    "N2 USER ADS TIME OUTPUT2": number;

    /**
     * @title N2 Output 2 Priority Advertising Display Time (secs)
     */
    "N2 PRIORITY ADS TIME OUTPUT2": number;

    /**
     * @title crowdDJ
     */
    "USER APP ENABLED": keyof IYesNo

    /**
     * @title CD Drive
     */
    "CD DRIVE": keyof IDrives;

    /**
     * @title Communications Port
     *
     */
    "COM PORT": number;

    /**
     * @title Channel 1 Volume Percent
     *
     */
    "CHANNEL 1 VOLUME %": number;

    /**
     * @title Channel 2 Volume Percent
     *
     */
    "CHANNEL 2 VOLUME %": number;

    /**
     * @title USA System
     */
    "USA SYSTEM": keyof IYesNo;

    /**
     * @title Background Audio Percent
     *
     */
    "BACKGROUND AUDIO %": number;

    /**
     * @title From Start Logo Or End
     */
    "FROM START LOGO OR END": keyof IStartEnd;

    /**
     * @title Setfile Priority
     *
     */
    "SETFILE PRIORITY": number;

    /**
     * @title Screen Saver Timeout (secs)
     *
     * @minimum 0
     */
    "SCREEN SAVER MINUTES": number;

    /**
     * @title Printer Connected
     */
    "PRINTER CONNECTED": keyof IYesNo

    /**
     * @title Second Output
     *
     */
    "SECOND OUTPUT": number;

    /**
     * @title System Password
     */
    "SYSTEM PASSWORD": string;

    /**
     * @title Standalone Jukebox
     */
    "STANDALONE JUKEBOX": keyof IYesNo;

    /**
     * @title HDMS Online
     */
    "HDMS ONLINE ENABLED": keyof IYesNo

    /**
     * @title HDMS DJ Mode
     */
    "PRO DJ ENABLED": keyof IYesNo;

    /**
     * @title Audio Compressor
     */
    "COMPRESSOR ALWAYS ON": keyof ICompressorSettings

    /**
     * @title Disable Remote Volume *
     */
    "DISABLE REMOTE VOLUME": keyof IYesNo;

    /**
     * @title Allow Remote Jukebox Credits (Required for MMNL Jukebox settings)
     */
    "DISABLE REMOTE CREDITS": keyof IYesNo;

    /**
     * @title Disable Remote *
     */
    "DISABLE REMOTE": keyof IYesNo;

    /**
     * @title Drive 0 (Removed in v3.98?)
     */
    "DRIVE 0 ENABLED": keyof IYesNo;

    /**
     * @title Drive 1 (Removed in v3.98?)
     */
    "DRIVE 1 ENABLED": keyof IYesNo;

    /**
     * @title Drive 2 (Removed in v3.98?)
     */
    "DRIVE 2 ENABLED": keyof IYesNo;

    /**
     * @title Legacy DJ Controller
     */
    "CONTROLLER ENABLED": keyof IYesNo;

    /**
     * @title Controller Volume (YES=VOLUME, NO=DISABLED, BPM=PITCH CHANGE)
     */
    "CONTROLLER VOLUME ENABLED": keyof IControllerVolume;

    /**
     * @title Free Play
     */
    "FREE PLAY ON": keyof IYesNo;

    /**
     * @title F5 User Only
     */
    "F5 USER ONLY": keyof IYesNo;

    /**
     * @title Full Screen *
     */
    "FULL SCREEN X,Y,W,H": keyof IYesNo;

    /**
     * @title Mouse On
     */
    "MOUSE ON": keyof IYesNo;

    /**
     * @title Max Cull Clips
     *
     */
    "MAX CULL CLIPS": number;

    /**
     * @title Culling < Plays
     *
     */
    "CULLING < PLAYS": number;

    /**
     * @title Culling > Months
     *
     */
    "CULLING > MONTHS": number;

    /**
     * @title Demo Notebook
     */
    "DEMO NOTEBOOK": keyof IYesNo;

    /**
     * @title Main Door Key
     */
    "MAIN DOOR KEY": string;

    /**
     * @title Coin Box Key
     */
    "COIN BOX KEY": string;

    /**
     * @title Logo Offset
     *
     */
    "LOGO OFFSET": number;

    /**
     * @title Scheduler Loads Music Video Clips Only (Recomended to leave Disabled)
     */
    "LOAD AUDIO SONGS": keyof IYesNo;

    /**
     * @title Jukebox Loads Music Video Clips Only
     */
    "ALLOW JUKEBOX AUDIO ONLY": keyof IYesNo;

    /**
     * @title Shared Desktop *
     */
    "ENABLE SHARED DESKTOP": keyof IYesNo;

    /**
     * @title Stutter Time
     *
     */
    "STUTTER TIME": number;

    /**
     * @title Preview Player Configuration
     */
    "PREVIEW PLAYER": keyof IPreviewPlayer;

    /**
     * @title Max Daily Log Entries
     *
     * @minimum 100
     * @maximum 9000
     */
    "MAX DAILY LOG": number;

    /**
     * @title Remote Skip
     */
    "REMOTE SKIP": keyof IYesNo;

    /**
     * @title Overlay
     */
    "OVERLAY ENABLED": keyof IYesNo;

    /**
     * @title Play Music During Install
     */
    "HALT DURING INSTALL": keyof IYesNo;

    /**
     * @title Install Priority *
     */
    "INSTALL PRIORITY": string;

    /**
     * @title Default Search Filter *
     */
    "DEFAULT SEARCH FILTER": string;

    /**
     * @title Dual billboards
     */
    "DUAL BILLBOARDS": keyof IYesNo;

    /**
     * @title Daily (6am) Restart
     */
    "RESTART ENABLED": keyof IYesNo;

    /**
     * @title Database Build Type
     */
    "BUILD TYPE": keyof IBuildType

    /**
     * @title Backup Type
     */
    "BACKUP TYPE": keyof IBackupType

    /**
     * @title Random Number Generator/Bingo
     */
    "ENABLE RNG": keyof IYesNo;

    /**
     * @title BPM Range *
     * @minimum 0
     *
     */
    "BPM RANGE": number;

    /**
     * @title Gym Mode
     */
    "ENABLE GYM MODE": keyof IYesNo;

    /**
     * @title Touch Pad
     */
    "TOUCH PAD ENABLED": keyof IYesNo;

    /**
     * @title IPod Touch Pad
     */
    "IPOD TOUCH PAD ENABLED": keyof IYesNo;

    /**
     * @title Display Jukebox Grand Total
     */
    "SHOW GRAND TOTAL": keyof IYesNo;

    /**
     * @title Numark External Audio
     */
    "NUMARK EXTERNAL AUDIO": keyof IYesNo;

    /**
     * @title Random Number Generator Display Time (minutes)
     *
     * @minimum 0
     */
    "RNG DISPLAY TIME": number;

    /**
     * @title Display Drawn
     */
    "DISPLAY DRAWN": keyof IYesNo;

    /**
     * @title External USB Audio
     */
    "EXTERNAL AUDIO": keyof IYesNo;

    /**
     * @title Trivia
     */
    "TRIVIA ENABLED": keyof IYesNo;

    /**
     * @title Backup Priority Advertising
     */
    "FTP ADVERTISING": keyof IYesNo;

    /**
     * @title Send Advertising via FTP
     */
    "FTP ADS": keyof IYesNo;
    /**
     * @title Guide
     */
    "GUIDE": string;
    /**
     * @title Install Drives
     */
    "INSTALL DRIVES": keyof IDrives;

    /**
     * @title Maximum Number of Music/Ambient Lists
     * @minimum 99
     * @maximum 200
     *
     */
    "TOTAL MAX LISTS": number;
    /**
     * @title Maximum Number of User/Spotify Lists
     * @minimum 0
     * @maximum 100
     *
     */
    "MAX USER LISTS": number;

    /**
     * @title Remote Install Drive
     */
    "REMOTE INSTALL DRIVE": keyof IRemoteInstallDrive;
    /**
     * @title Set Password
     */
    "PASSWORD": string | number;
    /**
     * @title Password Protection
     */
    "ENABLE PASSWORD": keyof IYesNo;
    /**
     * @title Password Protect Advertising
     */
    "ENABLE BILLBOARD PASSWORD": keyof IYesNo;
    /**
     * @title Password Protect All Zones
     */
    "ENABLE ZONE PASSWORD": keyof IYesNo;
    /**
     * @title Password Protect Scheduler
     */
    "ENABLE SCHEDULER PASSWORD": keyof IYesNo;
    /**
     * @title Password Protect Jukebox Settings
     */
    "ENABLE FREEPLAY PASSWORD": keyof IYesNo;
    /**
     * @title Allow Volume Control When Password Protected
     */
    "ENABLE CTRL_V FROM PP": keyof IYesNo;
    /**
     * @title Allow Next Song Control When Password Protected
     */
    "ENABLE CTRL_M FROM PP": keyof IYesNo;
    /**
     * @title Password Protect Remove Song Control
     */
    "ENABLE REMOVE PASSWORD": keyof IYesNo;
    /**
     * @title Allow Video Switching When Password Protected
     */
    "ENABLE F6 FROM PP": keyof IYesNo;
    /**
     * @title Allow List Loads When Password Protected
     */
    "ENABLE F9 FROM PP": keyof IYesNo;
}

export interface IOutputs {
    0: number,
    1: number,
    2: number
}

export interface IRemoteInstallDrive {
    "N:": string,
    "D:": string,
    "E:": string,
    "C:": string
}

export interface IDatabaseAccess {
    'ALL': string,
    'SETS': string
}

export interface IPreviewPlayer {
    USB: string,
    NONE: string,
    "AUDIO_1": string,
    "AUDIO_2": string,
    "AUDIO_3": string,
    "AUDIO_4": string
}

export interface IControllerVolume {
    YES: string,
    NO: string,
    BPM: string
}



export interface IDrives {
    "F:\\": string;
    "C:\\": string;
    "D:\\": string;
    "E:\\": string;
}

export interface IHardSoft {
    "H": string;
    "S": string;
}

export interface IAdvertisingUserPercentage {
    "100": string,
    "75": string,
    "50": string,
    "25": string,
    "0": string,
}

export interface IScrollingTextDisplayRatio extends IAdvertisingUserPercentage {
    '-1': number,
}

export interface IAudioChannels {
    AUDIO_1: string;
    AUDIO_2: string;
    AUDIO_3: string;
    AUDIO_4: string;
}

export interface IPlaylistColours {

    SAND: string;
    GRASS: string;
    PALEBLUE: string;
    WHITE: string;
    MONEYGREEN: string;
    SKYBLUE: string;
    CREAM: string;
    MEDGRAY: string;
    SILVER: string;
    ROSE: string;
}

export interface IJukeConfig {
    "A": string,
    "B": string,
    "C": string,
    "D": string,
    "E": string,
    "F": string
}

export interface IBuildType {
    BUILD_ALL: string,
    NORMAL_BUILD: string,
    BUILD_FROM_ACTIVATED_LISTS: string
}

export interface IBackupType {
    TO_USB: string
}

export interface IMusicList {
    HAPPY_HOUR: string
}

export interface IAccessLevel {
    VIEW: string,
    SEMI: string,
    FULL: string
}

export interface IResolution {
    RESOLUTION: Array<number>;
}


export interface IDefaultVideo {
    N2: string,
    UA: string,
    PA: string,
    AMV: string,
    'Input 3': string,
    'Input 4': string
}

export type INM4 = IAudioOnly | IMPEG1AndAudio | IMPEG4AndAudio;

/**
 * @title Audio Only content
 */
export type IAudioOnly = "NM3";

/**
 * @title MPEG1 video content + Audio Only content
 */
export type IMPEG1AndAudio = "NO";

/**
 * @title MPEG‌-4 Video content + MPEG‌-1 Video content + Audio Only content
 */
export type IMPEG4AndAudio = "YES";


export interface IPPCAFree {
    NO: string,
    YES: string,
    PPX: string
}

export interface IStartEnd {
    START: string,
    END: string
}

export interface IMultiZoneEnabled {
    "NO": string,
    "YES": string,
    "3": string
}

export interface IN2Frequency {
    0: number,
    1: number,
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number
}


export interface IYes {
    YES: string
}

export interface INo {
    NO: string
}

export interface IDefaultAppSearch {
    2: number,
    1: number
}

export interface IYesNo {
    "YES": string,
    "NO": string
}

export interface ICoreTempEnabled {
    "YES": string,
    "NO": string
}


export interface IVideoSwitcher {
    "YES": string,
    "NO": string,
    "HDMI1": string,
    "HDMI42": string,
    "HDMI2": string
}

export interface INumberVideoIns {
    "2": string,
    "3": string,
    "4": string
}

export interface IBackupEnabled {
    "NO": string,
    "YES": string,
    "TIME": string
}

export interface ICompressorSettings {
    "NO": string,
    "NEVER": string
}

export interface IAppSearch extends ILoadedSongs, ISelectionSets {

}


export interface ILoadedSongs {
    /**
* @title Loaded Songs
*/
    1;
}


export interface ISelectionSets {
    /**
 * @title Selection Sets
 */
    2;
}

export type IKioskCreditInterval = ICreditIntervalRange | ICreditUnlimited | ICreditFollowApp;
export type IKioskCreditLimit = ICreditLimitRange | ICreditFollowApp;
export type ICrowdDJCreditInterval = ICreditIntervalRange | ICreditUnlimited;

/**
 * @title Credit Limit
 * @minimum 1
 * @maximum 10
 */
export type ICreditLimitRange = number;

/**
 * @format time
 * @title Time (mm/ss)
 * @minimum 1
 * @maximum 3600
 */
export type ICreditIntervalRange = number

/**
 * @title Follow App
 */
export enum ICreditFollowApp {

    "Follow App" = 100000
}

/**
 * @title Unlimited Credits
 */
export enum ICreditUnlimited {

    "Unlimited Credits" = 0
}