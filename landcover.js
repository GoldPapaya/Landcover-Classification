/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8raw = ee.ImageCollection("LANDSAT/LC08/C02/T1"),
    Water = 
    /* color: #2a57d6 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-4.605832574847617, 56.031833566734086]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.604459283831992, 56.06902977383667]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.5557074527773045, 56.06519677147525]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.093077772695556, 56.18741396115713]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.501156556637504, 57.263270574446494]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.427574885354965, 57.32460169268399]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([0.029870662883499932, 51.49604870626341]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([0.04720846195576556, 51.496583058052245]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.014332141681929755, 51.484451729542016]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.029767153418180925, 51.50331837322457]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([0.1200932286618972, 51.514216171628206]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([0.16438186391580345, 51.507699174125634]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.614257918229652, 51.63282816329945]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.555206404557777, 51.682240416847385]),
            {
              "Class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.417377954977382, 51.7565322876402]),
            {
              "Class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.869273284336391, 53.308360928861525]),
            {
              "Class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.951670745273891, 53.353057625896994]),
            {
              "Class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.160054371824841, 53.29702661157763]),
            {
              "Class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.431222620478276, 54.59541299499652]),
            {
              "Class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.368051233759526, 54.655834571703636]),
            {
              "Class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.376290979853276, 54.56516854409123]),
            {
              "Class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.351571741572026, 54.62404492895435]),
            {
              "Class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.494394007197026, 54.54446203618949]),
            {
              "Class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.405130091181401, 54.53808868792384]),
            {
              "Class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.464181604853276, 54.67966049484217]),
            {
              "Class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.438089075556401, 54.652656725878025]),
            {
              "Class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-6.285653772822026, 54.69553667971247]),
            {
              "Class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.595619146931547, 54.49348429528657]),
            {
              "Class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.583259527790922, 54.45118956592512]),
            {
              "Class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.605232184040922, 54.40965034357694]),
            {
              "Class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.646430914509672, 54.540515690038404]),
            {
              "Class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.14549674168049975, 53.629492916688456]),
            {
              "Class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.23544730320393725, 53.68442694135247]),
            {
              "Class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.42084159031331225, 53.70800624494759]),
            {
              "Class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5361980356258123, 53.69581170249946]),
            {
              "Class": 0,
              "system:index": "34"
            })]),
    Urban = 
    /* color: #ff2a2a */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-0.196827919535274, 51.473040279964984]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.13901335330381404, 51.49468379505264]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.16510588260068904, 51.49350816386508]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.19016844363584529, 51.49468379505264]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.1251087817706109, 51.511139448273155]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.11317831607236872, 51.502484942870915]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.10219198794736872, 51.488591559481634]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.1013336810626031, 51.49869140078306]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.01636444156279282, 51.53810717000785]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.00812469546904282, 51.54365899328286]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.08090911929716782, 51.58196945007166]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.026137184353667298, 51.65316815974629]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.04158670827944855, 51.61758246545324]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.57273891725043, 51.445888177181224]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.5911066845844144, 51.446958050148375]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6062128857562894, 51.465569827248906]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.562954218764102, 51.466639239018704]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.5840685681293363, 51.46599759496441]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.61119106568793, 51.43743529948736]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.60295131959418, 51.43283370850992]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.5223151282657175, 51.458072360451695]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6928171442038717, 51.50604855250174]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6885256097800436, 51.51224528821904]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6873239801413717, 51.52015024465025]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.966710441595899, 51.568421425513684]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.987309806830274, 51.5615920349899]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.9897130661076177, 51.57781016266073]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.978040092474805, 51.59679508941862]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.974950187689649, 51.582717139867285]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.172704093939649, 51.47485505378351]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.1514180831974614, 51.47357198772665]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.3095290467624774, 53.46478372471223]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.245671014535915, 53.47704510082702]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.330815057504665, 53.472549674216815]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.2806899354343524, 53.36041895138242]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.175050469606051, 55.95879495412879]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.2203006312619564, 55.93649998956196]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.1763553187619564, 55.935346178513164]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.048452207651085, 55.779315727263246]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.9797876568698354, 55.8294838126833]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.245519468393272, 55.874965044473385]),
            {
              "Class": 1,
              "system:index": "40"
            })]),
    Crop = 
    /* color: #d0e337 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-0.882769251288571, 51.54929118479399]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.9145266060248991, 51.55388103576982]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.934954309882321, 51.53391714873092]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.9955611841750134, 51.61084696211729]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.9945312159132946, 51.63408016557469]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.843279023762542, 51.70164886263156]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.918810029621917, 51.71739158339005]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([0.46494849175094277, 51.935773304371125]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([0.48280127495406777, 51.98612337320658]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([0.48280127495406777, 52.012756400162054]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([0.7341135308134428, 51.95016480924526]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([0.6434763237821928, 52.011911150761854]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.7776900444595469, 52.778168435954356]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.7653304253189219, 52.80308251995382]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.7749434624282969, 52.820513890290066]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.7131453667251719, 52.770068286433464]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.6901427422134532, 52.825078094187774]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.8368104781534913, 52.98551587386385]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.8536332930948975, 53.00700588045891]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.8917421187784913, 52.98510249968909]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.8704561080363038, 52.98076183202794]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.9329408492472413, 52.93960718754547]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.7406801070597413, 53.05593835119723]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.64008654016521, 52.98820270958178]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.6133073653605225, 52.99998147804247]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.64008654016521, 53.01155047297937]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5429262008097413, 53.050572943203875]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5312532271769288, 53.06831751242435]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.4461091842081788, 53.15981277980158]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5140870894816163, 53.13716317473022]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.893285622643045, 54.74798724237758]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.96057688240867, 54.73629429605533]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.96332346443992, 54.76561936874304]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.98254953865867, 54.750761344306476]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.0000589991078885, 54.78185790196029]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.8283976221547635, 54.78304583142448]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.841615548180154, 54.947631581871455]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.8230761194692167, 54.94773017115417]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.869081368492654, 54.93974365577808]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.8848742151723417, 54.94960332158308]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.80127512459617, 54.96566939412608]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.763166298912576, 54.93550325599391]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.7940653467641385, 54.90807778648843]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.580259419515637, 55.65605725935791]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.558286763265637, 55.64908384237333]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.51502809627345, 55.653345522555384]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.56446657283595, 55.68897050664482]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.7649670611172, 55.66419134286556]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.991492172453419, 50.76751002671225]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.9696911775803723, 50.74970108648014]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.9439419710374035, 50.76729288533353]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.943426986906544, 50.78314155747676]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.9729527437424816, 50.78531219023512]),
            {
              "Class": 2,
              "system:index": "52"
            })]),
    Forest = 
    /* color: #50ff4d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([0.04722859594787909, 51.65723505499304]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([0.055897495484011905, 51.66511482541087]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([0.05409505102600409, 51.656489600362804]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([0.04791524145569159, 51.66724425787598]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([0.06679799292053534, 51.67293999775968]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([0.08465077612366034, 51.68188139674537]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([0.08413579199280097, 51.67900756817063]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([0.6705998259419488, 52.41967876918916]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([0.6937741118306207, 52.41810836661762]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([0.6939457732075738, 52.41350152974726]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([0.6719731169575738, 52.43255396067712]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([0.6549558169482772, 52.46707411487952]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([0.6401929385303085, 52.481294570733006]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([0.7129773623584335, 52.47397579237801]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([0.7140073306201522, 52.463727457408595]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([0.7764920718310897, 52.46309993080682]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-1.9616651214054492, 52.73099275492553]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-1.9661283172062305, 52.72979730291663]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-1.9946241057804492, 52.745023871195365]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.006039587347832, 52.74995967129272]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.011532751410332, 52.75037529209284]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.0122193969181446, 52.7480893286274]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.0177125609806446, 52.73468285653652]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.663364468364385, 51.69829263390292]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.6599312408253226, 51.71169656141892]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.6613045318409476, 51.71627000877078]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.693576870708135, 51.68701323802497]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.6443100555225882, 51.70201634545686]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.643795071391729, 51.70648439483215]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.720699368266729, 51.72339515621878]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.7172661407276664, 51.72807374676969]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.7849007232471976, 51.72488385118774]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.7876473052784476, 51.718077988301744]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.641052229200687, 54.290421130227195]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.632812483106937, 54.292024215704245]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5438918898452183, 54.28160304467446]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5418319533217808, 54.27518870583646]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5535049269545933, 54.28961956408881]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-0.5528182814467808, 54.28380774303543]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.642541630963182, 55.24372342135654]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6440865833557603, 55.23315293343501]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6415116627014634, 55.230314083103785]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6511246998108384, 55.253312728859385]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.6442582447327134, 55.252334334076274]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.670007451275682, 55.24842051407943]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-2.661767705181932, 55.2493990052089]),
            {
              "Class": 3,
              "system:index": "45"
            })]),
    Barren = 
    /* color: #00ffff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-5.281563813620136, 56.343236279484074]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.212212617331073, 56.50424862649913]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.005300825268031, 56.507948538974205]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.872091596752406, 56.60406846438035]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.991567915111781, 56.640333706776055]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.703176801830531, 56.66901898687536]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.476054723366625, 56.456919751030085]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.256328160866625, 56.555439739436295]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.382670934304125, 56.51227402845663]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.4911609245385, 56.6023360768153]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.0189769592643305, 56.85259766392378]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.856928619420581, 56.96656176929062]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.6795620490938874, 57.085386134990266]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.267330603781387, 57.2298725461391]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.0965001336788625, 57.34801105536365]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.1514317743038625, 57.25899071996453]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.2530553094601125, 57.37171343419877]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.3711583368038625, 57.312428776397496]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.260871760787384, 57.800697097433115]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.149635188521759, 57.74137420689827]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.254005305709259, 57.703239007442534]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-5.134528987349884, 57.68635869483944]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.931281917037384, 57.91248583720903]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.847511165084259, 57.867958075419665]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.894203059615509, 57.81752411355211]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.925788752974884, 57.788986716507836]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.60887415495951, 58.07801565708973]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.69676477995951, 58.0227858152772]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.88203349720276, 58.133160172981285]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.866059136693785, 58.374819176421916]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.863312554662535, 58.519979616657764]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.539215874975035, 58.46687153527829]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.338715386693785, 58.325818447884274]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.7756660702875355, 58.45681502436618]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.4735420468500355, 58.32004918582833]),
            {
              "Class": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.5408143780488466, 56.91274600148184]),
            {
              "Class": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-3.3870057842988466, 56.915744684935234]),
            {
              "Class": 4,
              "system:index": "36"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

// Select region of interest and adjust the display frame on init
var countries = ee.FeatureCollection("USDOS/LSIB_SIMPLE/2017");
var roi = countries.filter(ee.Filter.eq('country_na', 'United Kingdom'));
Map.addLayer(roi, {}, 'United Kingdom', false);
Map.centerObject(roi, 5);

// Remove clouds
var image = ee.Algorithms.Landsat.simpleComposite({
  collection: l8raw.filterDate('2020-01-01', '2020-12-31'),
  asFloat: true
});

var trueColorVis = {min: 0, max: 0.3, bands: ['B4', 'B3', 'B2']};
Map.addLayer(image.clip(roi), trueColorVis, "composite");

// Define training data
var label = "Class";
var bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B7'];
var input = image.select(bands);

// Classes: 0 -> water, 1 -> urban, 2 -> crop, 3 -> forest, 4 -> barren
var training = Urban.merge(Crop).merge(Water).merge(Forest).merge(Barren);

// Overlay points on landsat image
var trainImage = input.sampleRegions({
  collection: training,
  properties: [label],
  scale: 30
});

// 80% trainset 20% testset data distribution
var trainingData = trainImage.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThanOrEquals('random', 0.8));

// Classification model
var classifier = ee.Classifier.smileCart().train(trainSet, label, bands);

// Classify landsat image
var classified = input.classify(classifier);

// Visualization
var landcoverPalette = [
  'blue', //water
  'red', //urban
  'lightgreen', //crop
  'darkgreen', //forest
  'grey', //barren
];

Map.addLayer(classified.clip(roi), {palette: landcoverPalette, min: 0, max: 4}, 'Classification');