var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-left",
      "name": "Front Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.7261533576277994,
        "pitch": 0.44375644641759315,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": 1.4362033807391965,
          "pitch": 0.19036374694456448,
          "rotation": 0,
          "target": "1-front-centre"
        },
        {
          "yaw": 0.7936484132050037,
          "pitch": 0.07290378107737538,
          "rotation": 0,
          "target": "3-closed-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-centre",
      "name": "Front Centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3826135306839293
      },
      "linkHotspots": [
        {
          "yaw": -1.5851629195786412,
          "pitch": 0.21563090369803106,
          "rotation": 0,
          "target": "0-front-left"
        },
        {
          "yaw": 1.6445261052813587,
          "pitch": 0.10693910909495585,
          "rotation": 0,
          "target": "2-front-right"
        },
        {
          "yaw": -0.024272462209182777,
          "pitch": 0.16971621110314317,
          "rotation": 0,
          "target": "3-closed-gate"
        },
        {
          "yaw": 1.1225815455952493,
          "pitch": 0.05895535628235393,
          "rotation": 0,
          "target": "4-outside-r-lawn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-right",
      "name": "Front Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.568533320928923,
          "pitch": 0.22631407141918203,
          "rotation": 0,
          "target": "1-front-centre"
        },
        {
          "yaw": -1.0108478924671402,
          "pitch": 0.10756127210309252,
          "rotation": 0,
          "target": "3-closed-gate"
        },
        {
          "yaw": 0.33684062706587525,
          "pitch": 0.20533103094949468,
          "rotation": 0,
          "target": "4-outside-r-lawn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-closed-gate",
      "name": "Closed Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.984694655050073,
          "pitch": 0.2815330235818507,
          "rotation": 0,
          "target": "1-front-centre"
        },
        {
          "yaw": 0.00011119090000555332,
          "pitch": 0,
          "rotation": 0,
          "target": "19-open-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-outside-r-lawn",
      "name": "Outside R Lawn",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6715160870356165,
          "pitch": 0.1802926287139126,
          "rotation": 0,
          "target": "1-front-centre"
        },
        {
          "yaw": -3.016547618957391,
          "pitch": 0.28805997670569283,
          "rotation": 0,
          "target": "2-front-right"
        },
        {
          "yaw": 0.16393493479772125,
          "pitch": 0.12984243735451173,
          "rotation": 0,
          "target": "5-near-hot-water-sys"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-near-hot-water-sys",
      "name": "Near Hot water sys",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.786711861663111,
          "pitch": 0.10174123060824947,
          "rotation": 0,
          "target": "4-outside-r-lawn"
        },
        {
          "yaw": -0.4353118836495291,
          "pitch": 0.07579465300106314,
          "rotation": 0,
          "target": "6-rear"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-rear",
      "name": "Rear",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6570432332584826,
          "pitch": 0.11811561857177644,
          "rotation": 0,
          "target": "5-near-hot-water-sys"
        },
        {
          "yaw": -1.6801798477859329,
          "pitch": 0.07247253559361155,
          "rotation": 0,
          "target": "27-alfresco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bed-2",
      "name": "Bed 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.282514803526599,
          "pitch": 0.4250766918657636,
          "rotation": 0,
          "target": "8-hallway-outside-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hallway-outside-bed-2",
      "name": "Hallway outside bed 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.824422972709149,
          "pitch": 0.3914159836293827,
          "rotation": 0,
          "target": "7-bed-2"
        },
        {
          "yaw": -0.09938535431068907,
          "pitch": 0.4791458192962299,
          "rotation": 0,
          "target": "9-hallway-linen"
        },
        {
          "yaw": 2.005617455018651,
          "pitch": 0.3980536209539274,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": 1.815340568726377,
          "pitch": 0.21567441472608095,
          "rotation": 0,
          "target": "22-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hallway-linen",
      "name": "Hallway Linen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6441682737668089,
          "pitch": 0.21190447242530652,
          "rotation": 0,
          "target": "11-bed-3"
        },
        {
          "yaw": 3.124346092462382,
          "pitch": 0.6053748435949391,
          "rotation": 0,
          "target": "10-washroom-2"
        },
        {
          "yaw": 1.4569893176031954,
          "pitch": 0.5192728684672474,
          "rotation": 0,
          "target": "8-hallway-outside-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-washroom-2",
      "name": "Washroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.428416741023323,
          "pitch": 0.511931540333677,
          "rotation": 0,
          "target": "9-hallway-linen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bed-3",
      "name": "Bed 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7443588819757139,
          "pitch": 0.3228538122404423,
          "rotation": 0,
          "target": "9-hallway-linen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-drawing",
      "name": "Drawing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5212726965437184,
          "pitch": 0.44501343111702596,
          "rotation": 0,
          "target": "21-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-study",
      "name": "Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7811514787449596,
          "pitch": 0.3883348851080477,
          "rotation": 0,
          "target": "20-inside-open-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.419210972047539,
          "pitch": 0.41567350821517124,
          "rotation": 0,
          "target": "15-wir"
        },
        {
          "yaw": 0.6830307899789076,
          "pitch": 0.3107029367651073,
          "rotation": 0,
          "target": "20-inside-open-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-wir",
      "name": "WIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4982438765218404,
          "pitch": 0.39827763639343416,
          "rotation": 0,
          "target": "14-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5595690173962211,
          "pitch": 0.5572100713503474,
          "rotation": 0,
          "target": "15-wir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0991069003315097,
          "pitch": 0.414894626220109,
          "rotation": 0,
          "target": "20-inside-open-door"
        },
        {
          "yaw": 2.801520083497432,
          "pitch": 0.33360328322633137,
          "rotation": 0,
          "target": "18-garage-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-garage-front",
      "name": "Garage front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01912010293793287,
          "pitch": 0.21775342799333508,
          "rotation": 0,
          "target": "0-front-left"
        },
        {
          "yaw": 2.81914328541297,
          "pitch": 0.23188363989472016,
          "rotation": 0,
          "target": "28-rear-garage-door"
        },
        {
          "yaw": -1.9259983303653634,
          "pitch": 0.17049382533502921,
          "rotation": 0,
          "target": "17-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-open-door",
      "name": "Open Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1414985084432345,
          "pitch": 0.3346934504799979,
          "rotation": 0,
          "target": "20-inside-open-door"
        },
        {
          "yaw": -0.07254492763940945,
          "pitch": 0.24411367784878735,
          "rotation": 0,
          "target": "1-front-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-inside-open-door",
      "name": "Inside open door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.073485751986805,
          "pitch": 0.49843817365312404,
          "rotation": 0,
          "target": "21-hallway-1"
        },
        {
          "yaw": -0.7367147224188599,
          "pitch": 0.3148641473220799,
          "rotation": 0,
          "target": "14-master"
        },
        {
          "yaw": 0.5051172923825717,
          "pitch": 0.25701443552748415,
          "rotation": 0,
          "target": "13-study"
        },
        {
          "yaw": 1.1735507134479786,
          "pitch": 0.3856021345924674,
          "rotation": 0,
          "target": "17-laundry"
        },
        {
          "yaw": -0.09610197985786506,
          "pitch": 0.31978240708187755,
          "rotation": 0,
          "target": "19-open-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-hallway-1",
      "name": "Hallway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.946518057911277,
          "pitch": 0.4413273481046964,
          "rotation": 0,
          "target": "22-dining"
        },
        {
          "yaw": -2.157734944475841,
          "pitch": 0.28971811886960275,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": 1.4718732095752198,
          "pitch": 0.5335241512905355,
          "rotation": 0,
          "target": "12-drawing"
        },
        {
          "yaw": 0.12797332308968912,
          "pitch": 0.36823295990765814,
          "rotation": 0,
          "target": "20-inside-open-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8920230435806964,
          "pitch": 0.3496153253174068,
          "rotation": 0,
          "target": "21-hallway-1"
        },
        {
          "yaw": 2.3689123403038064,
          "pitch": 0.4339111514506655,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": -0.7954284125840729,
          "pitch": 0.34288032250399425,
          "rotation": 0,
          "target": "27-alfresco"
        },
        {
          "yaw": -2.4412209180085327,
          "pitch": 0.3612436376249981,
          "rotation": 0,
          "target": "25-kitchen-near-fridge"
        },
        {
          "yaw": 2.7497587079416963,
          "pitch": 0.2378116860094046,
          "rotation": 0,
          "target": "8-hallway-outside-bed-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6117231541509982,
          "pitch": 0.372796531710911,
          "rotation": 0,
          "target": "8-hallway-outside-bed-2"
        },
        {
          "yaw": 2.3193598876445654,
          "pitch": 0.36821995192267565,
          "rotation": 0,
          "target": "24-kitchen-near-basin"
        },
        {
          "yaw": -2.3531933828960376,
          "pitch": 0.4411413338198571,
          "rotation": 0,
          "target": "22-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-kitchen-near-basin",
      "name": "Kitchen near basin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4524744788415003,
          "pitch": 0.41243866081370584,
          "rotation": 0,
          "target": "25-kitchen-near-fridge"
        },
        {
          "yaw": -2.220839916570144,
          "pitch": 0.3824254576276225,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": -2.9551358475386937,
          "pitch": 0.29046898162866164,
          "rotation": 0,
          "target": "22-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-kitchen-near-fridge",
      "name": "Kitchen near fridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9269637582814312,
          "pitch": 0.41069225521065533,
          "rotation": 0,
          "target": "22-dining"
        },
        {
          "yaw": 1.814661174225198,
          "pitch": 0.31824461302791107,
          "rotation": 0,
          "target": "23-living"
        },
        {
          "yaw": 2.742107553662116,
          "pitch": 0.3525032640501671,
          "rotation": 0,
          "target": "24-kitchen-near-basin"
        },
        {
          "yaw": -1.9238612677089488,
          "pitch": 0.5248161623062924,
          "rotation": 0,
          "target": "26-wip"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-wip",
      "name": "WIP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3935656850371352,
          "pitch": 0.498901837612193,
          "rotation": 0,
          "target": "25-kitchen-near-fridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-alfresco",
      "name": "Alfresco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.686889163971596,
          "pitch": 0.19916563220643368,
          "rotation": 0,
          "target": "28-rear-garage-door"
        },
        {
          "yaw": -0.9646630664891305,
          "pitch": 0.19984450707462997,
          "rotation": 0,
          "target": "6-rear"
        },
        {
          "yaw": 0.12601292181581059,
          "pitch": 0.25979771543105024,
          "rotation": 0,
          "target": "22-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-rear-garage-door",
      "name": "Rear Garage Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.568878161056933,
          "pitch": 0.44956971615283337,
          "rotation": 0,
          "target": "29-clothes-line"
        },
        {
          "yaw": 2.8845339831926164,
          "pitch": 0.22289679466009638,
          "rotation": 0,
          "target": "18-garage-front"
        },
        {
          "yaw": 2.351452256700691,
          "pitch": 0.15642231763018266,
          "rotation": 0,
          "target": "17-laundry"
        },
        {
          "yaw": 1.218395010204807,
          "pitch": 0.23309599892681732,
          "rotation": 0,
          "target": "27-alfresco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-clothes-line",
      "name": "Clothes line",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6907874563773237,
          "pitch": 0.6342939523655744,
          "rotation": 0,
          "target": "28-rear-garage-door"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "10/149 Peverell St, Hillcrest",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
