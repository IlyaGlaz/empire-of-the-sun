const data = {}

data.cards = [
    {
        "side": "al",
        "num": 1,
        "type": "Political",
        "name": "Bataan Death March",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 2,
        "type": "Political",
        "name": "Imperial HQ Debate",
        "ociv": 1,
        "draw": true
    },
    {
        "side": "al",
        "num": 3,
        "type": "Resource",
        "name": "Prime Minister Curtin",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 4,
        "type": "Political",
        "name": "Arcadia Conference",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 5,
        "type": "Reaction",
        "name": "Operation Matador",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 6,
        "type": "Political",
        "name": "Doolittle Raid",
        "ov": 3,
        "ociv": 3,
        "remove": true
    },
    {
        "side": "al",
        "num": 7,
        "type": "Military",
        "name": "Vinegar Joe Stilwell",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["SEAC"],
        "remove": true
    },
    {
        "side": "al",
        "num": 8,
        "type": "Reaction",
        "name": "Australian Coast Watchers",
        "ov": 1,
        "ociv": 1,
        "draw": true,
        "remove": true
    },
    {
        "side": "al",
        "num": 9,
        "type": "Military",
        "name": "Olympic and Coronet",
        "ov": 3,
        "lv": 12,
        "ociv": 3,
        "eciv": 5,
        "hq": ["SW", "CPac"],
        "remove": false
    },
    {
        "side": "al",
        "num": 10,
        "type": "Political",
        "name": "General Douglas MacArthur",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 11,
        "type": "Political",
        "name": "War in Europe Minor",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 12,
        "type": "Intelligence",
        "name": "Commander Rochefort",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 13,
        "type": "Military",
        "name": "Operation Watchtower",
        "ov": 3,
        "lv": 5,
        "ociv": 3,
        "hq": ["Any"],
        "surprise": true
    },
    {
        "side": "al",
        "num": 14,
        "type": "Political",
        "name": "War in Europe Minor",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 15,
        "type": "Resource",
        "name": "Heroic Repair",
        "ov": 2,
        "ociv": 2
    },
    {
        "side": "al",
        "num": 16,
        "type": "Resource",
        "name": "Makin Island Raid",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 17,
        "type": "Resource",
        "name": "China Airlift",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 18,
        "type": "Resource",
        "name": "Edwin Booz",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 19,
        "type": "Military",
        "name": "Anakim Operation",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 20,
        "type": "Military",
        "name": "Halsey Replaces Ghormley",
        "ov": 1,
        "lv": 4,
        "ociv": 1,
        "eciv": 3,
        "hq": ["SPac"],
        "remove": true
    },
    {
        "side": "al",
        "num": 21,
        "type": "Military",
        "name": "Operation Cartwheel",
        "ov": 3,
        "lv": 6,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 22,
        "type": "Reaction",
        "name": "Orde Wingate",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 23,
        "type": "Resource",
        "name": "PT Boats",
        "ov": 2,
        "ociv": 2,
        "draw": true,
        "remove": true
    },
    {
        "side": "al",
        "num": 24,
        "type": "Reaction",
        "name": "Skip Bombing Attack",
        "ov": 2,
        "ociv": 2,
        "draw": true,
        "remove": true
    },
    {
        "side": "al",
        "num": 25,
        "type": "Military",
        "name": "Operation Lilliput",
        "ov": 1,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["SW"]
    },
    {
        "side": "al",
        "num": 26,
        "type": "Reaction",
        "name": "US Army Breaks Japanese Army Codes",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 27,
        "type": "Resource",
        "name": "Operation Vengeance",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 28,
        "type": "Military",
        "name": "Operation Chronicle",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 29,
        "type": "Military",
        "name": "Operation Toenails",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 30,
        "type": "Military",
        "name": "Operation Sandcrab-Cottage",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "al",
        "num": 31,
        "type": "Military",
        "name": "Black Day",
        "ov": 3,
        "lv": 6,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 32,
        "type": "Military",
        "name": "Operation Reno II",
        "ov": 3,
        "lv": 4,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 33,
        "type": "Military",
        "name": "Quadrant Conference",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 34,
        "type": "Military",
        "name": "Operation Culverin",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Commonwealth"]
    },
    {
        "side": "al",
        "num": 35,
        "type": "Military",
        "name": "Operation Ash",
        "ov": 2,
        "lv": 2,
        "ociv": 2,
        "hq": ["Anzac"],
        "surprise": true
    },
    {
        "side": "al",
        "num": 36,
        "type": "Military",
        "name": "Operation Cherry Blossom",
        "ov": 3,
        "lv": 5,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 37,
        "type": "Military",
        "name": "Operation Galvanic",
        "ov": 3,
        "lv": 6,
        "ociv": 3,
        "hq": ["Any"],
        "surprise": true
    },
    {
        "side": "al",
        "num": 38,
        "type": "Military",
        "name": "Operation Tarzan",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 39,
        "type": "Political",
        "name": "Sextant Conference",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 40,
        "type": "Military",
        "name": "Operation Dexterity",
        "ov": 3,
        "lv": 3,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 41,
        "type": "Political",
        "name": "War in Europe",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 42,
        "type": "Political",
        "name": "War in Europe",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 43,
        "type": "Political",
        "name": "Japanese Army/Navy Dispute",
        "ov": 1,
        "ociv": 1,
        "draw": true
    },
    {
        "side": "al",
        "num": 44,
        "type": "Military",
        "name": "Operation Squarepeg",
        "ov": 2,
        "lv": 2,
        "ociv": 2,
        "hq": ["Anzac"],
        "surprise": true
    },
    {
        "side": "al",
        "num": 45,
        "type": "Military",
        "name": "Operation Flintlock",
        "ov": 3,
        "lv": 4,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 46,
        "type": "Military",
        "name": "Operation Brewer",
        "ov": 2,
        "lv": 1,
        "ociv": 2,
        "hq": ["SW"],
        "surprise": true
    },
    {
        "side": "al",
        "num": 47,
        "type": "Political",
        "name": "War in Europe",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 48,
        "type": "Military",
        "name": "New China Army",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 49,
        "type": "Political",
        "name": "Roosevelt Threatens Chungking",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 50,
        "type": "Military",
        "name": "Tornado Taskforce",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 51,
        "type": "Military",
        "name": "Chenault",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "al",
        "num": 52,
        "type": "Political",
        "name": "Roosevelt-Nimitz-MacArthur",
        "ov": 1,
        "ociv": 1,
        "remove": true
    },
    {
        "side": "al",
        "num": 53,
        "type": "Military",
        "name": "Operation Forager II",
        "ov": 3,
        "lv": 4,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 54,
        "type": "Military",
        "name": "Hurricane Taskforce",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 55,
        "type": "Military",
        "name": "Operation Forager",
        "ov": 3,
        "lv": 4,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 56,
        "type": "Military",
        "name": "Typhoon Taskforce",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 57,
        "type": "Military",
        "name": "Axiom",
        "ov": 2,
        "lv": 5,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Commonwealth"]
    },
    {
        "side": "al",
        "num": 58,
        "type": "Military",
        "name": "Operation Romulus",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["SEAC"]
    },
    {
        "side": "al",
        "num": 59,
        "type": "Reaction",
        "name": "Ultra Information",
        "ov": 1,
        "ociv": 1,
        "draw": true
    },
    {
        "side": "al",
        "num": 60,
        "type": "Resource",
        "name": "20th Bomber Command",
        "ov": 3,
        "ociv": 3,
        "remove": true
    },
    {
        "side": "al",
        "num": 61,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 1,
        "draw": true,
        "remove": true
    },
    {
        "side": "al",
        "num": 62,
        "type": "Military",
        "name": "Operation King II",
        "ov": 3,
        "lv": 6,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "al",
        "num": 63,
        "type": "Military",
        "name": "Operation Stalemate",
        "ov": 3,
        "lv": 4,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 64,
        "type": "Military",
        "name": "Tradewind Taskforce",
        "ov": 2,
        "lv": 3,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 65,
        "type": "Military",
        "name": "MacArthur \"moral obligation\"",
        "ov": 3,
        "lv": 6,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "al",
        "num": 66,
        "type": "Political",
        "name": "War in Europe",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 67,
        "type": "Resource",
        "name": "Curtis LeMay",
        "ov": 3,
        "ociv": 3,
        "remove": true
    },
    {
        "side": "al",
        "num": 68,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 1,
        "draw": true,
        "remove": true
    },
    {
        "side": "al",
        "num": 69,
        "type": "Military",
        "name": "S-Day",
        "ov": 3,
        "lv": 6,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 70,
        "type": "Military",
        "name": "Slim's Burma Offensive",
        "ov": 2,
        "lv": 6,
        "ociv": 2,
        "eciv": 4,
        "hq": ["SEAC"],
        "remove": true
    },
    {
        "side": "al",
        "num": 71,
        "type": "Military",
        "name": "Victor Plans",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 72,
        "type": "Military",
        "name": "Halsey",
        "ov": 2,
        "lv": 4,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 73,
        "type": "Political",
        "name": "War in Europe",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 74,
        "type": "Military",
        "name": "Operation Iceberg",
        "ov": 3,
        "lv": 4,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 75,
        "type": "Military",
        "name": "Operation Detachment",
        "ov": 3,
        "lv": 4,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 76,
        "type": "Military",
        "name": "Oboe",
        "ov": 2,
        "lv": 5,
        "ociv": 2,
        "eciv": 4,
        "hq": ["Any"]
    },
    {
        "side": "al",
        "num": 77,
        "type": "Political",
        "name": "Mao Tse Tung",
        "ov": 2,
        "ociv": 2,
        "remove": true
    },
    {
        "side": "al",
        "num": 78,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 1,
        "draw": true,
        "remove": true
    },
    {
        "side": "al",
        "num": 79,
        "type": "Political",
        "name": "Soviets Invade Manchuria",
        "ov": 3,
        "ociv": 3
    },
    {
        "side": "al",
        "num": 80,
        "type": "Resource",
        "name": "New Submarine Doctrine",
        "ov": 1,
        "ociv": 1,
        "draw": true,
        "remove": true
    },
    {
        "side": "al",
        "num": 81,
        "type": "Political",
        "name": "China Offensive",
        "ov": 2,
        "ociv": 2
    },
    {
        "side": "al",
        "num": 82,
        "type": "Political",
        "name": "China Offensive",
        "ov": 2,
        "ociv": 2
    },
    {
        "side": "al",
        "num": 83,
        "type": "Political",
        "name": "China Offensive",
        "ov": 2,
        "ociv": 2
    },
    {
        "side": "al",
        "num": 84,
        "type": "Military",
        "name": "U.S. Carrier Raids",
        "ov": 3,
        "lv": 0,
        "ociv": 3,
        "hq": ["CPac"],
        "surprise": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 1,
        "type": "Military",
        "name": "Operation Z",
        "ov": 3,
        "surprise": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 2,
        "type": "Military",
        "name": "IAI-Operation No. 1",
        "ov": 3,
        "hq": ["Any"],
        "surprise": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 3,
        "type": "Military",
        "name": "Col. Tsuji, Unit 82",
        "ov": 2,
        "lv": 3,
        "ociv": 4,
        "hq": ["Any"],
        "surprise": true
    },
    {
        "side": "jp",
        "num": 4,
        "type": "Reaction",
        "name": "JN25 Code Change",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 5,
        "type": "Resource",
        "name": "Japanese Aircraft Production Efficiency",
        "ov": 2,
        "ociv": 4,
        "remove": true
    },
    {
        "side": "jp",
        "num": 6,
        "type": "Political",
        "name": "China Operation",
        "ov": 2,
        "ociv": 4,
        "remove": true
    },
    {
        "side": "jp",
        "num": 7,
        "type": "Political",
        "name": "US Joint Staff Debate",
        "ov": 2,
        "ociv": 4,
        "draw": true
    },
    {
        "side": "jp",
        "num": 8,
        "type": "Military",
        "name": "Operation C",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 9,
        "type": "Military",
        "name": "Rear Admiral Matami Ugaki",
        "ov": 3,
        "lv": 6,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 10,
        "type": "Military",
        "name": "2nd Operational Phase",
        "ov": 3,
        "lv": 6,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 11,
        "type": "Political",
        "name": "US/British Second Front Conference",
        "ov": 2,
        "ociv": 4,
        "draw": true
    },
    {
        "side": "jp",
        "num": 12,
        "type": "Military",
        "name": "Operation MI",
        "ov": 3,
        "lv": 8,
        "ociv": 5,
        "eciv": 8,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 13,
        "type": "Reaction",
        "name": "JN25 Code Change",
        "ov": 2,
        "ociv": 4,
        "remove": true
    },
    {
        "side": "jp",
        "num": 14,
        "type": "Military",
        "name": "Operation MO",
        "ov": 3,
        "lv": 5,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 15,
        "type": "Political",
        "name": "Mahatma Gandhi",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 16,
        "type": "Military",
        "name": "Operation RI",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 17,
        "type": "Reaction",
        "name": "Japanese Counterattack at Savo Island",
        "ov": 2,
        "lv": 3,
        "ociv": 4,
        "hq": ["Any"],
        "draw": true
    },
    {
        "side": "jp",
        "num": 18,
        "type": "Political",
        "name": "Bridge on River Kwai",
        "ov": 1,
        "ociv": 3,
        "remove": true
    },
    {
        "side": "jp",
        "num": 19,
        "type": "Reaction",
        "name": "Weather",
        "ov": 2,
        "ociv": 4,
        "remove": true
    },
    {
        "side": "jp",
        "num": 20,
        "type": "Military",
        "name": "Naval Battle of Guadalcanal",
        "ov": 2,
        "lv": 5,
        "ociv": 3,
        "eciv": 5,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 21,
        "type": "Reaction",
        "name": "Mahatma Gandhi",
        "ov": 3,
        "ociv": 5,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 22,
        "type": "Reaction",
        "name": "Weather",
        "ov": 2,
        "ociv": 4,
        "remove": true
    },
    {
        "side": "jp",
        "num": 23,
        "type": "Military",
        "name": "Operation RE",
        "ov": 2,
        "lv": 3,
        "ociv": 4,
        "eciv": 6,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 24,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 25,
        "type": "Military",
        "name": "Operation KA",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 26,
        "type": "Political",
        "name": "Chiang Kai-shek",
        "ov": 2,
        "ociv": 4,
        "remove": true
    },
    {
        "side": "jp",
        "num": 27,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 28,
        "type": "Military",
        "name": "Big Tokyo Express Operation",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 29,
        "type": "Military",
        "name": "Combined Fleet",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 30,
        "type": "Resource",
        "name": "Flight Instructors",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 31,
        "type": "Resource",
        "name": "New Operation Plan",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 32,
        "type": "Military",
        "name": "Operation I-Go",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 33,
        "type": "Political",
        "name": "Imperial Intervention",
        "ov": 2,
        "ociv": 4
    },
    {
        "side": "jp",
        "num": 34,
        "type": "Political",
        "name": "US Army/Navy Dispute",
        "ov": 2,
        "ociv": 4,
        "draw": true
    },
    {
        "side": "jp",
        "num": 35,
        "type": "Military",
        "name": "Operation KE",
        "ov": 3,
        "ociv": 5
    },
    {
        "side": "jp",
        "num": 36,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 37,
        "type": "Military",
        "name": "1st Convoy Escort Fleet",
        "ov": 3,
        "lv": 2,
        "ociv": 5,
        "eciv": 7,
        "hq": ["CF"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 38,
        "type": "Military",
        "name": "Grand Escort Command",
        "ov": 3,
        "lv": 2,
        "ociv": 5,
        "eciv": 7,
        "hq": ["CF"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 39,
        "type": "Resource",
        "name": "Subhas Chandra Bose",
        "ov": 2,
        "ociv": 4,
        "remove": true
    },
    {
        "side": "jp",
        "num": 40,
        "type": "Military",
        "name": "Operation U-Go",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 41,
        "type": "Political",
        "name": "Patrick Hurley",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 42,
        "type": "Political",
        "name": "Ichi-Go",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 43,
        "type": "Political",
        "name": "Tojo Resigns",
        "ov": 1,
        "ociv": 3
    },
    {
        "side": "jp",
        "num": 44,
        "type": "Military",
        "name": "Tokyo Express",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "eciv": 7,
        "hq": ["Any"]
    },
    {
        "side": "jp",
        "num": 45,
        "type": "Reaction",
        "name": "Operation Sho-Go",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 46,
        "type": "Reaction",
        "name": "Operation A-Go",
        "ov": 3,
        "lv": 4,
        "ociv": 5,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 47,
        "type": "Military",
        "name": "VADM Kondo",
        "ov": 3,
        "lv": 7,
        "ociv": 5,
        "eciv": 7,
        "hq": ["South", "SouthSeas"]
    },
    {
        "side": "jp",
        "num": 48,
        "type": "Military",
        "name": "General Adachi",
        "ov": 3,
        "lv": 5,
        "ociv": 5,
        "eciv": 7,
        "hq": ["South", "SouthSeas"]
    },
    {
        "side": "jp",
        "num": 49,
        "type": "Reaction",
        "name": "JN25 Code Change",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 50,
        "type": "Military",
        "name": "Ha-Go",
        "ov": 3,
        "lv": 6,
        "ociv": 5,
        "eciv": 7,
        "hq": ["South", "SouthSeas"]
    },
    {
        "side": "jp",
        "num": 51,
        "type": "Political",
        "name": "War in Europe",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 52,
        "type": "Political",
        "name": "War in Europe",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 53,
        "type": "Political",
        "name": "War in Europe",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 54,
        "type": "Political",
        "name": "War in Europe",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 55,
        "type": "Political",
        "name": "War in Europe",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 56,
        "type": "Political",
        "name": "War in Europe",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 57,
        "type": "Political",
        "name": "War in Europe",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 58,
        "type": "Military",
        "name": "Western Force",
        "ov": 3,
        "lv": 5,
        "ociv": 5,
        "eciv": 7,
        "hq": ["South", "SouthSeas"]
    },
    {
        "side": "jp",
        "num": 59,
        "type": "Military",
        "name": "Central Force",
        "ov": 3,
        "lv": 5,
        "ociv": 5,
        "eciv": 7,
        "hq": ["South", "SouthSeas"]
    },
    {
        "side": "jp",
        "num": 60,
        "type": "Military",
        "name": "East Force",
        "ov": 3,
        "lv": 5,
        "ociv": 5,
        "eciv": 7,
        "hq": ["South", "SouthSeas"]
    },
    {
        "side": "jp",
        "num": 61,
        "type": "Reaction",
        "name": "Kamikaze Attack",
        "ov": 2,
        "ociv": 4,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 62,
        "type": "Reaction",
        "name": "Kamikaze Attack",
        "ov": 2,
        "ociv": 4,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 63,
        "type": "Reaction",
        "name": "Kamikaze Attack",
        "ov": 2,
        "ociv": 4,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 64,
        "type": "Reaction",
        "name": "Weather",
        "ov": 2,
        "ociv": 4,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 65,
        "type": "Reaction",
        "name": "Yamato Suicide Run",
        "ov": 1,
        "ociv": 4,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 66,
        "type": "Reaction",
        "name": "Kamikaze Attack",
        "ov": 2,
        "ociv": 4,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 67,
        "type": "Political",
        "name": "Japanese Army/Navy",
        "ov": 2,
        "ociv": 4
    },
    {
        "side": "jp",
        "num": 68,
        "type": "Political",
        "name": "Japanese Army/Navy",
        "ov": 2,
        "ociv": 4
    },
    {
        "side": "jp",
        "num": 69,
        "type": "Reaction",
        "name": "JN25 Code Change",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 70,
        "type": "Reaction",
        "name": "JN25 Code Change",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 71,
        "type": "Resource",
        "name": "High Altitude Interceptors",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 72,
        "type": "Resource",
        "name": "Carrier Conversion",
        "ov": 3,
        "ociv": 5,
        "remove": true
    },
    {
        "side": "jp",
        "num": 73,
        "type": "Military",
        "name": "Ants",
        "ov": 2,
        "lv": 3,
        "ociv": 4,
        "eciv": 6,
        "hq": ["South", "SouthSeas"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 74,
        "type": "Political",
        "name": "Tokyo Rose",
        "ov": 1,
        "ociv": 3,
        "remove": true
    },
    {
        "side": "jp",
        "num": 75,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 76,
        "type": "Military",
        "name": "Operation Tsurugi",
        "ov": 2,
        "lv": 1,
        "ociv": 4,
        "eciv": 6,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 77,
        "type": "Resource",
        "name": "Fuel Shortage",
        "ov": 3,
        "ociv": 5
    },
    {
        "side": "jp",
        "num": 78,
        "type": "Resource",
        "name": "Tainan Air Unit",
        "ov": 1,
        "ociv": 3,
        "remove": true
    },
    {
        "side": "jp",
        "num": 79,
        "type": "Military",
        "name": "Tinian Raid",
        "ov": 2,
        "lv": 1,
        "ociv": 4,
        "eciv": 6,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 80,
        "type": "Resource",
        "name": "Submarine Launched Air Attack on the Panama Canal",
        "ov": 2,
        "ociv": 4,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 81,
        "type": "Reaction",
        "name": "Kamikaze Attack",
        "ov": 2,
        "ociv": 4,
        "draw": true,
        "remove": true
    },
    {
        "side": "jp",
        "num": 82,
        "type": "Political",
        "name": "Indian Worker's Strike",
        "ov": 3,
        "ociv": 5
    },
    {
        "side": "jp",
        "num": 83,
        "type": "Military",
        "name": "Invasion of Java",
        "ov": 2,
        "lv": 4,
        "ociv": 4,
        "eciv": 6,
        "hq": ["South"]
    },
    {
        "side": "jp",
        "num": 84,
        "type": "Reaction",
        "name": "JN25 Code Change",
        "ov": 1,
        "ociv": 3,
        "draw": true
    },
    {
        "side": "jp",
        "num": 85,
        "type": "Reaction",
        "name": "Battle of Kolombangara",
        "ov": 2,
        "ociv": 4,
        "hq": ["Any"],
        "remove": true
    },
    {
        "side": "jp",
        "num": 86,
        "type": "Reaction",
        "name": "Submarine Attack",
        "ov": 1,
        "ociv": 3,
        "draw": true
    }
]

data.pieces = [
    {
        name: "CV Lexington",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "12-12-2",
        setup: {
            "1941": {hex: 5410, location: "5410 at Sea", on_map: true, starts_reduced: true},
            "1942": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1943": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: true},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: true}
        },
    },
    {
        name: "CV Enterprise",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "12-12-2",
        setup: {
            "1941": {hex: 5609, location: "5609 at Sea", on_map: true, starts_reduced: true},
            "1942": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1943": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: true},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: true}
        },
    },
    {
        name: "BB MD/CA",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "15-10",
        setup: {
            "1941": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA New Orleans",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "9-8",
        setup: {
            "1941": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1942": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA US Asia",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "4-6",
        setup: {
            "1941": {hex: 3014, location: "Samar\\/Leyte", on_map: true, starts_reduced: false},
            "1942": {hex: 3014, location: "Samar\\/Leyte", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "DD US Asia",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "2-4",
        setup: {
            "1941": {hex: 2616, location: "Tarakan", on_map: true, starts_reduced: false},
            "1942": {hex: 2616, location: "Tarakan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Force Z",
        faction: "AL",
        nationality: "CW",
        type: "Naval",
        stats: "8-10",
        setup: {
            "1941": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA Exeter",
        faction: "AL",
        nationality: "CW",
        type: "Naval",
        stats: "5-8",
        setup: {
            "1941": {hex: 1307, location: "Colombo", on_map: true, starts_reduced: false},
            "1942": {hex: 1307, location: "Colombo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA Kent",
        faction: "AL",
        nationality: "CW",
        type: "Naval",
        stats: "3-8",
        setup: {
            "1941": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1942": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1943": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1944": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "SP": {hex: 3727, location: "Townsville (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CL Dutch",
        faction: "AL",
        nationality: "Dutch",
        type: "Naval",
        stats: "3-8",
        setup: {
            "1941": {hex: 2019, location: "Tjilatjap", on_map: true, starts_reduced: false},
            "1942": {hex: 2019, location: "Tjilatjap", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "5 Chinese Army",
        faction: "AL",
        nationality: "Chinese",
        type: "Ground",
        stats: "5-12",
        setup: {
            "1941": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1942": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1943": {hex: 2205, location: "Ledo", on_map: true, starts_reduced: false},
            "1944": {hex: 2205, location: "Ledo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "6 Chinese Army",
        faction: "AL",
        nationality: "Chinese",
        type: "Ground",
        stats: "5-12",
        setup: {
            "1941": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1942": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1943": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1944": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "66 Chinese Army",
        faction: "AL",
        nationality: "Chinese",
        type: "Ground",
        stats: "6-12",
        setup: {
            "1941": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1942": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1943": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false},
            "1944": {hex: 2407, location: "Kunming", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "VF-211 ",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "1-8-2",
        setup: {
            "1941": {hex: 4612, location: "Wake", on_map: true, starts_reduced: false},
            "1942": {hex: 4612, location: "Wake", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "W Brigade",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "2-6",
        setup: {
            "1941": {hex: 4612, location: "Wake", on_map: true, starts_reduced: false},
            "1942": {hex: 4612, location: "Wake", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "FEAF Air",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "8-10-2",
        setup: {
            "1941": {hex: 2812, location: "Clark Field", on_map: true, starts_reduced: false},
            "1942": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "19 LRB",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "2-9-6",
        setup: {
            "1941": {hex: 2812, location: "Clark Field", on_map: true, starts_reduced: false},
            "1942": {hex: 2917, location: "Menado", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "7AF Air",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "10-10-2",
        setup: {
            "1941": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1942": {hex: 5108, location: "Midway", on_map: true, starts_reduced: false},
            "1943": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1944": {hex: 5018, location: "Tarawa", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "7AF LRB",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "4-10-6",
        setup: {
            "1941": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1942": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1943": {hex: 5108, location: "Midway", on_map: true, starts_reduced: false},
            "1944": {hex: 5018, location: "Tarawa", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "AVG Air",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "6-10-2",
        setup: {
            "1941": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false},
            "1942": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "NL Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "6-10",
        setup: {
            "1941": {hex: 2812, location: "Clark Field", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "R Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "10-10",
        setup: {
            "1941": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false},
            "1942": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "SL Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "4-10",
        setup: {
            "1941": {hex: 2913, location: "2913", on_map: true, starts_reduced: false},
            "1942": {hex: 2912, location: "2912", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Dut Air",
        faction: "AL",
        nationality: "Dutch",
        type: "Air",
        stats: "7-9-2",
        setup: {
            "1941": {hex: 2019, location: "Tjilatjap", on_map: true, starts_reduced: false},
            "1942": {hex: 2019, location: "Tjilatjap", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "J Division",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "6-12",
        setup: {
            "1941": {hex: 2019, location: "Tjilatjap", on_map: true, starts_reduced: false},
            "1942": {hex: 2019, location: "Tjilatjap", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 1916, location: "Palembang", on_map: true, starts_reduced: false},
            "1942": {hex: 1916, location: "Palembang", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "M Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "3-10",
        setup: {
            "1941": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "P Brigade",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 3014, location: "Samar\\/Leyte", on_map: true, starts_reduced: false},
            "1942": {hex: 3014, location: "Samar\\/Leyte", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "X Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1942": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1943": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Cen Pac HQ",
        faction: "AL",
        nationality: "US",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1942": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1943": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "SW Pac HQ",
        faction: "AL",
        nationality: "US",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false},
            "1942": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false},
            "1943": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1944": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "SP": {hex: 3727, location: "Townsville (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Malaya HQ",
        faction: "AL",
        nationality: "CW",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false},
            "1942": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "FE Air",
        faction: "AL",
        nationality: "CW",
        type: "Air",
        stats: "7-9-2",
        setup: {
            "1941": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false},
            "1942": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "MA Air",
        faction: "AL",
        nationality: "CW",
        type: "Air",
        stats: "6-9-2",
        setup: {
            "1941": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false},
            "1942": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "3 Ind Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "9-9",
        setup: {
            "1941": {hex: 2014, location: "Kuala Lumpur", on_map: true, starts_reduced: false},
            "1942": {hex: 2014, location: "Kuala Lumpur", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "B Ind Division",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "3-5",
        setup: {
            "1941": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false},
            "1942": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "2 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 1813, location: "Medan", on_map: true, starts_reduced: false},
            "1942": {hex: 1813, location: "Medan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "3 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 2616, location: "Tarakan", on_map: true, starts_reduced: false},
            "1942": {hex: 2616, location: "Tarakan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "4 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 2919, location: "Amboina", on_map: true, starts_reduced: false},
            "1942": {hex: 2919, location: "Amboina", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1B Division",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "6-4",
        setup: {
            "1941": {hex: 2108, location: "2108", on_map: true, starts_reduced: false},
            "1942": {hex: 2108, location: "2108", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1 Ind Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: 2105, location: "Imphal", on_map: true, starts_reduced: false},
            "1942": {hex: 2105, location: "Imphal", on_map: true, starts_reduced: false},
            "1943": {hex: 2205, location: "Ledo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "2 Ind Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false},
            "1942": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "8 Aus Division",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "6-12",
        setup: {
            "1941": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false},
            "1942": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1 Aus Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: 3023, location: "Darwin", on_map: true, starts_reduced: false},
            "1942": {hex: 3023, location: "Darwin", on_map: true, starts_reduced: false},
            "1943": {hex: 3023, location: "Darwin", on_map: true, starts_reduced: false},
            "1944": {hex: 3023, location: "Darwin", on_map: true, starts_reduced: false},
            "SP": {hex: 3023, location: "Darwin (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "2 Aus Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1942": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1943": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1944": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "SP": {hex: 3727, location: "Townsville (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "PM Bde",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "5-5",
        setup: {
            "1941": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "1942": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "1943": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "1944": {hex: 4024, location: "Gili Gili", on_map: true, starts_reduced: false},
            "SP": {hex: 3823, location: "Port Moresby (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Aus Air",
        faction: "AL",
        nationality: "CW",
        type: "Air",
        stats: "10-10-2",
        setup: {
            "1941": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1942": {hex: 3727, location: "Townsville", on_map: true, starts_reduced: false},
            "1943": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "1944": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "SP": {hex: 3823, location: "Port Moresby (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "HK Division",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "3-4",
        setup: {
            "1941": {hex: 2709, location: "Hong Kong", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "5 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 2517, location: "Balikpapan", on_map: true, starts_reduced: false},
            "1942": {hex: 2517, location: "Balikpapan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "6 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 2917, location: "Menado", on_map: true, starts_reduced: false},
            "1942": {hex: 2917, location: "Menado", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "7 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 2719, location: "Menado", on_map: true, starts_reduced: false},
            "1942": {hex: 2719, location: "Menado", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "8 Regiment",
        faction: "AL",
        nationality: "Dutch",
        type: "Ground",
        stats: "1-6",
        setup: {
            "1941": {hex: 2721, location: "Koepang", on_map: true, starts_reduced: false},
            "1942": {hex: 2721, location: "Koepang", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "S Pac HQ (Halsey)",
        faction: "AL",
        nationality: "US",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1943": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"}
        },
    },
    {
        name: "14AF Air",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "9-10-2",
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1943": {hex: 2104, location: "Jarhat", on_map: true, starts_reduced: false},
            "1944": {hex: 2104, location: "Jarhat", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "ABDA HQ",
        faction: "AL",
        nationality: "US",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"}
        },
    },
    {
        name: "7 Armor Bde",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "4-10",
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1943": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1944": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"}
        },
    },
    {
        name: "77 Brigade",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "6-6",
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1943": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1944": {hex: 2205, location: "Ledo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "4M Division",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1943": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1944": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"}
        },
    },
    {
        name: "BB Mississippi",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "15-12",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA Northampton",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "9-8",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Warspite",
        faction: "AL",
        nationality: "CW",
        type: "Naval",
        stats: "14-14",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 1005, location: "Maldives Is", on_map: true, starts_reduced: false},
            "1944": {hex: 1005, location: "Maldives Is", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Indomitable",
        faction: "AL",
        nationality: "CW",
        type: "Carrier",
        stats: "10-12-2",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 1005, location: "Maldives Is", on_map: true, starts_reduced: false},
            "1944": {hex: 1005, location: "Maldives Is", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CVL Hermes",
        faction: "AL",
        nationality: "CW",
        type: "Carrier",
        stats: "2-8-2",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2}
        },
    },
    {
        name: "XI Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "22-12",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 3922, location: "Buna", on_map: true, starts_reduced: false},
            "1944": {hex: 3822, location: "Lae", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "10AF LRB",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "4-10-6",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false},
            "1944": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "5AF Air",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 3626, location: "Cairns", on_map: true, starts_reduced: false},
            "1944": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "SP": {hex: 3626, location: "Cairns (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "5AF LRB",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "4-10-6",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 3626, location: "Cairns", on_map: true, starts_reduced: false},
            "1944": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "SP": {hex: 3626, location: "Cairns (South Pacific) (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1 MAW",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "6-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 4423, location: "Guadalcanal", on_map: true, starts_reduced: false},
            "1944": {hex: 5108, location: "Midway", on_map: true, starts_reduced: false},
            "SP": {hex: 4826, location: "Efate (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "M Brigade",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "8-8",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "SP": {hex: 4825, location: "Espiritu Santo (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "SF Brigade",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "4-6",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 4825, location: "Espritu Santo", on_map: true, starts_reduced: false},
            "1944": {hex: 4423, location: "Guadalcanal", on_map: true, starts_reduced: false},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "SEAC Air",
        faction: "AL",
        nationality: "CW",
        type: "Air",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1943": {hex: 1805, location: "Calcutta", on_map: true, starts_reduced: false},
            "1944": {hex: 1805, location: "Calcutta", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "SEAC HQ",
        faction: "AL",
        nationality: "CW",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1942": {hex: 1805, location: "Calcutta", on_map: true, starts_reduced: false},
            "1943": {hex: 1805, location: "Calcutta", on_map: true, starts_reduced: false},
            "1944": {hex: 1805, location: "Calcutta", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB North Carolina",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "16-16",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Wasp",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "12-12-2",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "S Pac HQ (Ghormley)",
        faction: "AL",
        nationality: "US",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "XIV Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "22-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 4423, location: "Guadalcanal", on_map: true, starts_reduced: false},
            "1944": {hex: 4222, location: "Buin", on_map: true, starts_reduced: false},
            "SP": {hex: 3626, location: "Cairns (South Pacific) (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "I Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "22-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 4024, location: "Gili Gili", on_map: true, starts_reduced: false},
            "1944": {hex: 3922, location: "Buna", on_map: true, starts_reduced: false},
            "SP": {hex: 3727, location: "Townsville (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "13AF Air",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 4825, location: "Espritu Santo", on_map: true, starts_reduced: false},
            "1944": {hex: 4322, location: "New Georgia", on_map: true, starts_reduced: false},
            "SP": {hex: 4825, location: "Espiritu Santo (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "13AF LRB",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "4-10-6",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 4825, location: "Espritu Santo", on_map: true, starts_reduced: false},
            "1944": {hex: 4322, location: "New Georgia", on_map: true, starts_reduced: false},
            "SP": {hex: 4825, location: "Espiritu Santo (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "11AF Air",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 5100, location: "Dutch Harbor", on_map: true, starts_reduced: false},
            "1944": {hex: 5100, location: "Dutch Harbor", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "11AF LRB",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "4-10-6",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 5100, location: "Dutch Harbor", on_map: true, starts_reduced: false},
            "1944": {hex: 5100, location: "Dutch Harbor", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1M Division",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 3626, location: "Cairns", on_map: true, starts_reduced: false},
            "1944": {hex: 3921, location: "Gasmata", on_map: true, starts_reduced: false},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "ANZAC HQ",
        faction: "AL",
        nationality: "US",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "1944": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "SP": {hex: 3823, location: "Port Moresby (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "15 British Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "16-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false},
            "1944": {hex: 1905, location: "Dacca", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "33 British Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "20-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 2105, location: "Imphal\\/Kohima", on_map: true, starts_reduced: false},
            "1944": {hex: 2105, location: "Imphal\\/Kohima", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "3 Aus Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "22-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 3823, location: "Port Moresby", on_map: true, starts_reduced: false},
            "1944": {hex: 3822, location: "Lae", on_map: true, starts_reduced: false},
            "SP": {hex: 3626, location: "Cairns (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "3NZ Division",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "9-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "1944": {hex: 4322, location: "New Georgia", on_map: true, starts_reduced: false},
            "SP": {hex: 4828, location: "Noumea (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Washington",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "16-16",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4}
        },
    },
    {
        name: "CA London",
        faction: "AL",
        nationality: "CW",
        type: "Naval",
        stats: "6-8",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 1005, location: "Maldives", on_map: true, starts_reduced: false},
            "1944": {hex: 1005, location: "Maldives", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "14AF LRB",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "4-10-6",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4}
        },
    },
    {
        name: "2 MAW",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "8-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 4825, location: "Espritu Santo", on_map: true, starts_reduced: false},
            "1944": {hex: 4222, location: "Buin", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4}
        },
    },
    {
        name: "2M Division",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 4423, location: "Guadalcanal", on_map: true, starts_reduced: false},
            "1944": {hex: 5018, location: "Tarawa", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4}
        },
    },
    {
        name: "4 Ind Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "16-12",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 2006, location: "Akyab", on_map: true, starts_reduced: false},
            "1944": {hex: 2006, location: "Akyab", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Massachusetts",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "16-16",
        setup: {
            "1941": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1942": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5}
        },
    },
    {
        name: "CVL San Jacinto",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1942": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5}
        },
    },
    {
        name: "XXIV Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "22-12",
        setup: {
            "1941": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1942": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5}
        },
    },
    {
        name: "SEAC LRB",
        faction: "AL",
        nationality: "CW",
        type: "Air",
        stats: "4-10-6",
        setup: {
            "1941": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1942": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1944": {hex: 1805, location: "Calcutta", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Essex",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "14-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6}
        },
    },
    {
        name: "CV Bunker Hill",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "14-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6}
        },
    },
    {
        name: "CVL Cowpens",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 4826, location: "Efate", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6}
        },
    },
    {
        name: "CVL Belleau Wood",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 4826, location: "Efate", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6}
        },
    },
    {
        name: "CVE Sangamon",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "6-8-2",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 4826, location: "Efate", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6}
        },
    },
    {
        name: "3M Division",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 4222, location: "Buin", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6}
        },
    },
    {
        name: "BB New Jersey",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "16-16",
        setup: {
            "1941": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1942": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1943": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1944": {hex: 4826, location: "Efate", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Franklin",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "14-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1942": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1943": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Intrepid",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "14-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1942": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1943": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CVL Bataan",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1942": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1943": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1944": {hex: 4826, location: "Efate", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Hancock",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "14-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 5808, location: "Oahu", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CVE Casablanca",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "6-8-2",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 4826, location: "Efate", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "6M Division",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 4826, location: "Efate", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "IX Corps",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "22-12",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 4828, location: "Noumea", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "11 Abn Division",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "9-12",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 3626, location: "Cairns", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "4 Aus Corps",
        faction: "AL",
        nationality: "CW",
        type: "Ground",
        stats: "20-12",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 3822, location: "Lae", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Shangri La",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "14-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "BB Missouri",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "16-16",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "BB New York",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "16-16",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "3 MAW",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "10-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "20BC (B29)",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "6-10-8",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "CV Bon Homme Richard",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "14-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "BC Alaska",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "10-12",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "BB Duke of York",
        faction: "AL",
        nationality: "CW",
        type: "Naval",
        stats: "20-16",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "CV Victorious",
        faction: "AL",
        nationality: "CW",
        type: "Carrier",
        stats: "12-14-2",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "CVE St. Lo",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "6-8-2",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "CVE Commencement Bay",
        faction: "AL",
        nationality: "US",
        type: "Carrier",
        stats: "6-8-2",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "BC21 (B29)",
        faction: "AL",
        nationality: "US",
        type: "Air",
        stats: "6-10-8",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "5M Division",
        faction: "AL",
        nationality: "US",
        type: "Ground",
        stats: "12-12",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "CA Baltimore",
        faction: "AL",
        nationality: "US",
        type: "Naval",
        stats: "8-10",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "CV Akagi",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "12-12-3",
        setup: {
            "1941": {hex: 3705, location: "Ominato", on_map: true, starts_reduced: false},
            "1942": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Soryu",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "10-12-3",
        setup: {
            "1941": {hex: 3705, location: "Ominato", on_map: true, starts_reduced: false},
            "1942": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Shokaku",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "14-12-3",
        setup: {
            "1941": {hex: 3705, location: "Ominato", on_map: true, starts_reduced: false},
            "1942": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1943": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "SP": {hex: 4017, location: "Truk (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CVL Zuiho",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "8-8-3",
        setup: {
            "1941": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1942": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false},
            "1943": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1944": {hex: 3615, location: "Uluthi", on_map: true, starts_reduced: false},
            "SP": {hex: 4017, location: "Truk (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CVL Ryujo",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "6-8-3",
        setup: {
            "1941": {hex: 3416, location: "Palau Is", on_map: true, starts_reduced: false},
            "1942": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Nagato",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "20-14",
        setup: {
            "1941": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1942": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1943": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Hiei",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "17-14",
        setup: {
            "1941": {hex: 3705, location: "Ominato", on_map: true, starts_reduced: false},
            "1942": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1943": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1944": {hex: 3615, location: "Uluthi", on_map: true, starts_reduced: false},
            "SP": {hex: 4017, location: "Truk (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Kongo",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "13-14",
        setup: {
            "1941": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1942": {hex: 2311, location: "Cam Ranh", on_map: true, starts_reduced: false},
            "SP": {hex: 4017, location: "Truk (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA Aoba",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "12-10",
        setup: {
            "1941": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1942": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "1943": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "SP": {hex: 4021, location: "Rabaul (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA Mogami",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "12-10",
        setup: {
            "1941": {hex: 2311, location: "Cam Ranh", on_map: true, starts_reduced: false},
            "1942": {hex: 2311, location: "Cam Ranh", on_map: true, starts_reduced: false},
            "1943": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA Takao",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "12-10",
        setup: {
            "1941": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1942": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1943": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "1944": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CA Nachi",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "10-10",
        setup: {
            "1941": {hex: 3416, location: "Palau Is", on_map: true, starts_reduced: false},
            "1942": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false},
            "1943": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1944": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "SP": {hex: 4021, location: "Rabaul (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "APD Kamikaze",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "8-8",
        setup: {
            "1941": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1942": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1943": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "1944": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "SP": {hex: 4021, location: "Rabaul (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CL Tenryu",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "4-8",
        setup: {
            "1941": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "1942": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "SP": {hex: 4021, location: "Rabaul (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Comb Fleet HQ (Yam)",
        faction: "JP",
        nationality: "Japanese",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1942": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1943": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "SP": {hex: 3416, location: "Palau Is (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "South Seas HQ",
        faction: "JP",
        nationality: "Japanese",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1942": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1943": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1944": {hex: 3813, location: "Saipan", on_map: true, starts_reduced: false},
            "SP": {hex: 4017, location: "Truk (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "South HQ",
        faction: "JP",
        nationality: "Japanese",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false},
            "1942": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false},
            "1943": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false},
            "1944": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "21 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "16-10-3",
        setup: {
            "1941": {hex: 3009, location: "Taihoku", on_map: true, starts_reduced: false},
            "1942": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1943": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "SP": {hex: 4021, location: "Rabaul (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "22 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "20-10-3",
        setup: {
            "1941": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false},
            "1942": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false},
            "1943": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1944": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "23 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "16-10-3",
        setup: {
            "1941": {hex: 3009, location: "Taihoku", on_map: true, starts_reduced: false},
            "1942": {hex: 3009, location: "Taihoku", on_map: true, starts_reduced: false},
            "1943": {hex: 2220, location: "Soerabaja", on_map: true, starts_reduced: false},
            "1944": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "24 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "10-10-3",
        setup: {
            "1941": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "1942": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "1943": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "1944": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1 SN Bde",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "4-6",
        setup: {
            "1941": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1942": {hex: 2911, location: "Aparri", on_map: true, starts_reduced: false},
            "1943": {hex: 5018, location: "Tarawa", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "2 SN Bde",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "4-6",
        setup: {
            "1941": {hex: 2311, location: "Camn Ranh", on_map: true, starts_reduced: false},
            "1942": {hex: 2415, location: "Miri", on_map: true, starts_reduced: false},
            "1943": {hex: 4600, location: "Attu\\/Kiska", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "3 SN Bde",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "4-6",
        setup: {
            "1941": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1942": {hex: 3814, location: "Guam", on_map: true, starts_reduced: false},
            "1943": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "1944": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "4 SN Bde",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "4-6",
        setup: {
            "1941": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "1942": {hex: 4715, location: "Kwajalein", on_map: true, starts_reduced: false},
            "1943": {hex: 4612, location: "Wake", on_map: true, starts_reduced: false},
            "1944": {hex: 4612, location: "Wake", on_map: true, starts_reduced: false},
            "SP": {hex: 4423, location: "Guadalcanal (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "SS Bde",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "6-6",
        setup: {
            "1941": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1942": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "1943": {hex: 4322, location: "New Georgia", on_map: true, starts_reduced: false},
            "SP": {hex: 3822, location: "Lae (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Korean Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-18",
        setup: {
            "1941": {hex: 3305, location: "Seoul", on_map: true, starts_reduced: false},
            "1942": {hex: 3305, location: "Seoul", on_map: true, starts_reduced: false},
            "1943": {hex: 3305, location: "Seoul", on_map: true, starts_reduced: false},
            "1944": {hex: 3305, location: "Seoul", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "ED Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1942": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1943": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1944": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "14th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1942": {hex: 2812, location: "Clark Field", on_map: true, starts_reduced: false},
            "1943": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false},
            "1944": {hex: 2813, location: "Manila\\/Corregidor", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "15th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "20-12",
        setup: {
            "1941": {hex: 2211, location: "Phnom Penh", on_map: true, starts_reduced: false},
            "1942": {hex: 2109, location: "2109", on_map: true, starts_reduced: false},
            "1943": {hex: 2206, location: "Lashio", on_map: true, starts_reduced: false},
            "1944": {hex: 2206, location: "Lashio", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "16th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 3416, location: "Palau Is", on_map: true, starts_reduced: false},
            "1942": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false},
            "1943": {hex: 2220, location: "Soerabaja", on_map: true, starts_reduced: false},
            "1944": {hex: 2220, location: "Soerabaja", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "17th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 2708, location: "2708", on_map: true, starts_reduced: false},
            "1942": {hex: 2709, location: "Hong Kong", on_map: true, starts_reduced: false},
            "1943": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "1944": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "SP": {hex: 4021, location: "Rabaul (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "18th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1942": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1943": {hex: 3822, location: "Lae", on_map: true, starts_reduced: false},
            "1944": {hex: 3721, location: "Madang", on_map: true, starts_reduced: false},
            "SP": {hex: 3720, location: "Wewak (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "19th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 3209, location: "Okinawa", on_map: true, starts_reduced: false},
            "1942": {hex: 2913, location: "2913", on_map: true, starts_reduced: false},
            "1943": {hex: 3720, location: "Wewak", on_map: true, starts_reduced: false},
            "1944": {hex: 3720, location: "Wewak", on_map: true, starts_reduced: false},
            "SP": {hex: 4017, location: "Truk (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "25th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 2509, location: "Taan", on_map: true, starts_reduced: false},
            "1942": {hex: 2112, location: "Khota Baru", on_map: true, starts_reduced: false},
            "1943": {hex: 1916, location: "Palembang", on_map: true, starts_reduced: false},
            "1944": {hex: 1916, location: "Palembang", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "27th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 3704, location: "Hakodate", on_map: true, starts_reduced: false},
            "1942": {hex: 3704, location: "Hakodate", on_map: true, starts_reduced: false},
            "1943": {hex: 3704, location: "Hakodate", on_map: true, starts_reduced: false},
            "1944": {hex: 3704, location: "Hakodate", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "35th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 3007, location: "Shanghai", on_map: true, starts_reduced: false},
            "1942": {hex: 3007, location: "Shanghai", on_map: true, starts_reduced: false},
            "1943": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false},
            "1944": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "38th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: 2211, location: "Phnom Penh", on_map: true, starts_reduced: false},
            "1942": {hex: 1913, location: "Kuala Lumpur", on_map: true, starts_reduced: false},
            "1943": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false},
            "1944": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "1 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "20-10-2",
        setup: {
            "1941": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1942": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1943": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false},
            "1944": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "2 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "20-10-2",
        setup: {
            "1941": {hex: 3004, location: "Peiping", on_map: true, starts_reduced: false},
            "1942": {hex: 3004, location: "Peiping", on_map: true, starts_reduced: false},
            "1943": {hex: 3004, location: "Peiping", on_map: true, starts_reduced: false},
            "1944": {hex: 3004, location: "Peiping", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "3 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "20-10-2",
        setup: {
            "1941": {hex: 3607, location: "Nagoya", on_map: true, starts_reduced: false},
            "1942": {hex: 3607, location: "Nagoya", on_map: true, starts_reduced: false},
            "1943": {hex: 1916, location: "Palembang", on_map: true, starts_reduced: false},
            "1944": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "4 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "20-10-2",
        setup: {
            "1941": {hex: 3607, location: "Nagoya", on_map: true, starts_reduced: false},
            "1942": {hex: 3607, location: "Nagoya", on_map: true, starts_reduced: false},
            "1943": {hex: 3004, location: "Peiping", on_map: true, starts_reduced: false},
            "1944": {hex: 3004, location: "Peiping", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "5 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "22-10-2",
        setup: {
            "1941": {hex: 2909, location: "Tainan", on_map: true, starts_reduced: false},
            "1942": {hex: 2812, location: "Clark Field", on_map: true, starts_reduced: false},
            "1943": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false},
            "1944": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "BB Yamato",
        faction: "JP",
        nationality: "Japanese",
        type: "Naval",
        stats: "18-18",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1942": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1943": {hex: 4017, location: "Truk", on_map: true, starts_reduced: false},
            "1944": {hex: 3615, location: "Uluthi", on_map: true, starts_reduced: false},
            "SP": {hex: 4017, location: "Truk (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "25 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "10-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1942": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1943": {hex: 4222, location: "Buin", on_map: true, starts_reduced: false},
            "1944": {hex: 4021, location: "Rabaul", on_map: true, starts_reduced: false},
            "SP": {hex: 3822, location: "Lae (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "28th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 2", on_map: false, arrives_turn: 2},
            "1942": {hex: 2110, location: "Bangkok", on_map: true, starts_reduced: false},
            "1943": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false},
            "1944": {hex: 2008, location: "Rangoon", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Junyo",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "8-8-3",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "26 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "10-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 4415, location: "Eniwetok", on_map: true, starts_reduced: false},
            "1944": {hex: 3416, location: "Palau Is", on_map: true, starts_reduced: false},
            "SP": {hex: 3119, location: "Sarong (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "6 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 3720, location: "Wewak", on_map: true, starts_reduced: false},
            "1944": {hex: 3720, location: "Wewak", on_map: true, starts_reduced: false},
            "SP": {hex: 3720, location: "Wewak (South Pacific)", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "31st Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1942": {hex: null, location: "Turn 3", on_map: false, arrives_turn: 3},
            "1943": {hex: 3813, location: "Saipan", on_map: true, starts_reduced: false},
            "1944": {hex: 3813, location: "Saipan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Tainan AG",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-4",
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "SP": {hex: 3922, location: "Buna", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "Comb Fleet HQ (Oza)",
        faction: "JP",
        nationality: "Japanese",
        type: "HQ",
        stats: null,
        setup: {
            "1941": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1942": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1943": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Special Event", on_map: false, arrives_turn: "SE"}
        },
    },
    {
        name: "7 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 3119, location: "Sarong", on_map: true, starts_reduced: false},
            "1944": {hex: 3720, location: "Wewak", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4}
        },
    },
    {
        name: "37th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 2616, location: "Tarakan", on_map: true, starts_reduced: false},
            "1944": {hex: 2616, location: "Tarakan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "27 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "10-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1942": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4},
            "1943": {hex: 2212, location: "Saigon", on_map: true, starts_reduced: false},
            "1944": {hex: 3704, location: "Hakodate", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 4", on_map: false, arrives_turn: 4}
        },
    },
    {
        name: "28 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "10-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1942": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1943": {hex: 2620, location: "Makassar", on_map: true, starts_reduced: false},
            "1944": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false},
            "SP": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5}
        },
    },
    {
        name: "8 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1942": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1943": {hex: 2915, location: "Davao", on_map: true, starts_reduced: false},
            "1944": {hex: 2409, location: "Hanoi", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "33rd Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1942": {hex: null, location: "Turn 5", on_map: false, arrives_turn: 5},
            "1943": {hex: 2106, location: "Mandalay", on_map: true, starts_reduced: false},
            "1944": {hex: 2106, location: "Mandalay", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "9 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 1916, location: "Palembang", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "50 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6}
        },
    },
    {
        name: "51 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1942": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1943": {hex: null, location: "Turn 6", on_map: false, arrives_turn: 6},
            "1944": {hex: 3704, location: "Hakodate", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CVE Kaiyo",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "8-8-3",
        setup: {
            "1941": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1942": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1943": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "10 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1942": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1943": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1944": {hex: 3706, location: "Tokyo", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "2nd Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1942": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1943": {hex: null, location: "Turn 7", on_map: false, arrives_turn: 7},
            "1944": {hex: 3520, location: "Hollandia", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CV Taiho",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "10-12-3",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "61 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 3813, location: "Saipan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "62 AF",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "8-10-3",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 3813, location: "Saipan", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "11 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "6-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 3407, location: "Kure", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "29th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1942": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1943": {hex: null, location: "Turn 8", on_map: false, arrives_turn: 8},
            "1944": {hex: 2015, location: "Singapore", on_map: true, starts_reduced: false}
        },
    },
    {
        name: "CVL Amagi",
        faction: "JP",
        nationality: "Japanese",
        type: "Carrier",
        stats: "8-8-3",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "12 AD",
        faction: "JP",
        nationality: "Japanese",
        type: "Air",
        stats: "6-10-2",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "32nd Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1942": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1943": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9},
            "1944": {hex: null, location: "Turn 9", on_map: false, arrives_turn: 9}
        },
    },
    {
        name: "36th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    },
    {
        name: "39th Army",
        faction: "JP",
        nationality: "Japanese",
        type: "Ground",
        stats: "18-12",
        setup: {
            "1941": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1942": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1943": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10},
            "1944": {hex: null, location: "Turn 10", on_map: false, arrives_turn: 10}
        },
    }
]