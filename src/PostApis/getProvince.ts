// God forgive me for this code, I know it's ugly but it works.
// Dit is een tijdelijke oplossing tot ik gebruik kan maken van de Google Geo API.
export const findProvince = async (zipcode: number) => {
    if (zipcode > 10 && zipcode < 100 || zipcode > 118 && zipcode < 199) {
        return 'RM'
    } else if (zipcode >= 1010 && zipcode <= 1039 || zipcode == 1100) {
        return 'VT'
    } else if (zipcode >= 2010 && zipcode <= 2049 || zipcode == 2100) {
        return 'RI'
    } else if (zipcode >= 3010 && zipcode <= 3049 || zipcode == 3100) {
        return 'FR'
    } else if (zipcode >= 4010 && zipcode <= 4029 || zipcode == 4100) {
        return 'LT'
    } else if (zipcode >= 5010 && zipcode <= 5039 || zipcode == 5100) {
        return 'TR'
    } else if (zipcode >= 6010 && zipcode <= 6089 || zipcode >= 6121 && zipcode <= 6135) {
        return 'PG'
    } else if (zipcode >= 7010 && zipcode <= 7019 || zipcode >= 7030 && zipcode <= 7049 || zipcode == 7100) {
        return 'SS'
    } else if (zipcode >= 7020 && zipcode <= 7029 || zipcode == 8020) {
        return 'OT'
    } else if (zipcode >= 8010 && zipcode <= 8039 || zipcode == 8100) {
        return 'NU'
    } else if (zipcode >= 8040 && zipcode <= 8049) {
        return 'OG'
    } else if (zipcode >= 9010 && zipcode <= 9049 || zipcode >= 9121 && zipcode <= 9134|| zipcode == 8030 || zipcode == 8033 || zipcode == 8035 || zipcode == 8043) {
        return 'CA'
    } else if (zipcode >= 9070 && zipcode <= 9099 || zipcode == 9170 || zipcode == 8010 || zipcode == 8013 || zipcode == 8019 || zipcode == 8030 || zipcode == 8034) {
        return 'OR'
    } else if (zipcode >= 9010 && zipcode <= 9017) {
        return 'CI'
    } else if (zipcode >= 9020 && zipcode <= 9041) {
        return 'MD/VS'
    } else if (zipcode >= 10010 && zipcode <= 10099 || zipcode >= 10121 && zipcode <= 10156) {
        return 'TO'
    } else if (zipcode >= 11010 && zipcode <= 11029 || zipcode == 11100) {
        return 'AO'
    } else if (zipcode >= 12010 && zipcode <= 12089 || zipcode == 18025 || zipcode == 12100) {
        return 'CN'
    } else if (zipcode >= 13010 && zipcode <= 13060 || zipcode == 13100) {
        return 'VC'
    } else if (zipcode >= 13811 && zipcode <= 13899 || zipcode == 13900) {
        return 'BI'
    } else if (zipcode >= 14010 && zipcode <= 14059 || zipcode == 14100) {
        return 'AT'
    } else if (zipcode >= 15010 && zipcode <= 15079 || zipcode == 15100) {
        return 'AL'
    } else if (zipcode >= 16010 && zipcode <= 16049 || zipcode >= 16121 && zipcode <= 16167 || zipcode == 16100) {
        return 'GE'
    } else if (zipcode >= 17010 && zipcode <= 17058 || zipcode == 12071 || zipcode == 17100) {
        return 'SV'
    } else if (zipcode >= 18010 && zipcode <= 18039 || zipcode == 18100) {
        return 'IM'
    } else if (zipcode >= 19010 && zipcode <= 19038 || zipcode >= 19121 && zipcode <= 19137 || zipcode == 19100) {
        return 'SP'
    } else if (zipcode >= 20010 && zipcode <= 20099 || zipcode >= 20121 && zipcode <= 20163 || zipcode == 20100) {
        return 'MI'
    } else if (zipcode >= 20811 && zipcode <= 20886 || zipcode == 20900) {
        return 'MB'
    } else if (zipcode >= 21010 && zipcode <= 21059 || zipcode == 21100) {
        return 'VA'
    } else if (zipcode >= 22010 && zipcode <= 22079 || zipcode == 22100) {
        return 'CO'
    } else if (zipcode >= 23010 && zipcode <= 23038 || zipcode == 23100) {
        return 'SO'
    } else if (zipcode >= 23801 && zipcode <= 23899 || zipcode == 23900) {
        return 'LC'
    } else if (zipcode >= 24010 && zipcode <= 24069 || zipcode >= 24121 && zipcode <= 24129 || zipcode == 24100) {
        return 'BG'
    } else if (zipcode >= 25010 && zipcode <= 25089 || zipcode >= 25121 && zipcode <= 25136 || zipcode == 25100) {
        return 'BS'
    } else if (zipcode >= 26010 && zipcode <= 26049 || zipcode == 26100) {
        return 'CR'
    } else if (zipcode >= 26811 && zipcode <= 26867 || zipcode == 26900) {
        return 'LO'
    } else if (zipcode >= 27010 && zipcode <= 27059 || zipcode == 27100) {
        return 'PV'
    } else if (zipcode >= 28010 && zipcode <= 28079 || zipcode == 28100) {
        return 'NO'
    } else if (zipcode >= 28801 && zipcode <= 28899 || zipcode >= 28921 && zipcode <= 28925 || zipcode == 28900) {
        return 'VB'
    } else if (zipcode >= 29010 && zipcode <= 29029 || zipcode == 29100) {
        return 'PC'
    } else if (zipcode >= 30010 && zipcode <= 30039 || zipcode == 30100 || zipcode >= 30121 && zipcode <= 30176) {
        return 'VE'
    } else if (zipcode >= 31010 && zipcode <= 31059 || zipcode == 31100) {
        return 'TV'
    } else if (zipcode >= 32010 && zipcode <= 32047 || zipcode == 32100) {
        return 'BL'
    } else if (zipcode >= 33010 && zipcode <= 33059 || zipcode == 33100) {
        return 'UD'
    } else if (zipcode >= 33070 && zipcode <= 33099 || zipcode == 33170) {
        return 'PN'
    } else if (zipcode >= 34010 && zipcode <= 34018 || zipcode == 34100 || zipcode >= 34121 && zipcode <= 34151) {
        return 'TS'
    } else if (zipcode >= 34070 && zipcode <= 34079 || zipcode == 34170) {
        return 'GO'
    } else if (zipcode >= 35010 && zipcode <= 35048 || zipcode == 35100 || zipcode >= 35121 && zipcode <= 35143) {
        return 'PD'
    } else if (zipcode >= 36010 && zipcode <= 36078 || zipcode == 36100) {
        return 'VI'
    } else if (zipcode >= 37010 && zipcode <= 37069 || zipcode == 37100 || zipcode >= 37121 && zipcode <= 37143) {
        return 'VR'
    } else if (zipcode >= 38010 && zipcode <= 38089 || zipcode == 38100) {
        return 'TN'
    } else if (zipcode >= 39010 && zipcode <= 39058 || zipcode == 39100) {
        return 'BZ'
    } else if (zipcode >= 40010 && zipcode <= 40069 || zipcode == 40100 || zipcode >= 40121 && zipcode <= 40142) {
        return 'BO'
    } else if (zipcode >= 41010 && zipcode <= 41059 || zipcode == 41100) {
        return 'MO'
    } else if (zipcode >= 42010 && zipcode <= 42049 || zipcode == 42100) {
        return 'RE'
    } else if (zipcode >= 43010 && zipcode <= 43059 || zipcode == 43100) {
        return 'PR'
    } else if (zipcode >= 44010 && zipcode <= 44049 || zipcode == 44100) {
        return 'FE'
    } else if (zipcode >= 45010 && zipcode <= 45039 || zipcode == 45100) {
        return 'RO'
    } else if (zipcode >= 46010 && zipcode <= 46049 || zipcode == 46100) {
        return 'MN'
    } else if (zipcode >= 47010 && zipcode <= 47043 || zipcode == 47100) {
        return 'FC'
    } else if (zipcode >= 47814 && zipcode <= 47855 || zipcode == 47900) {
        return 'RN'
    } else if (zipcode >= 47891 && zipcode <= 47899 || zipcode == 47890) {
        return 'SM'
    } else if (zipcode >= 48010 && zipcode <= 48027 || zipcode == 48100) {
        return 'RA'
    } else if (zipcode >= 50010 && zipcode <= 50068 || zipcode == 50100 || zipcode >= 50121 && zipcode <= 50145) {
        return 'FI'
    } else if (zipcode >= 51010 && zipcode <= 51039 || zipcode == 51100) {
        return 'PT'
    } else if (zipcode >= 52010 && zipcode <= 52048 || zipcode == 52100) {
        return 'AR'
    } else if (zipcode >= 53011 && zipcode <= 53049 || zipcode == 53100) {
        return 'SI'
    } else if (zipcode >= 54010 && zipcode <= 54038 || zipcode == 54100) {
        return 'MS'
    } else if (zipcode >= 55010 && zipcode <= 55064 || zipcode == 55100) {
        return 'LU'
    } else if (zipcode >= 56010 && zipcode <= 56048 || zipcode == 56100 || zipcode >= 56121 && zipcode <= 56128) {
        return 'PI'
    } else if (zipcode >= 57014 && zipcode <= 57039 || zipcode == 57100 || zipcode >= 57121 && zipcode <= 57129) {
        return 'LI'
    } else if (zipcode >= 58010 && zipcode <= 58055 || zipcode == 58100) {
        return 'GR'
    } else if (zipcode >= 59011 && zipcode <= 59026 || zipcode == 59100) {
        return 'PO'
    } else if (zipcode >= 60010 && zipcode <= 60048 || zipcode == 60100 || zipcode >= 60121 && zipcode <= 60131) {
        return 'AN'
    } else if (zipcode >= 61010 && zipcode <= 61049 || zipcode == 61100) {
        return 'PU'
    } else if (zipcode >= 62010 && zipcode <= 62039 || zipcode == 62100) {
        return 'MC'
    } else if (zipcode >= 63010 && zipcode <= 63049 || zipcode == 63100) {
        return 'AP'
    } else if (zipcode >= 63811 && zipcode <= 63858 || zipcode == 63900) {
        return 'FM'
    } else if (zipcode >= 64010 && zipcode <= 64049 || zipcode == 64100) {
        return 'TE'
    } else if (zipcode >= 65010 && zipcode <= 65029 || zipcode == 65100 || zipcode >= 65121 && zipcode <= 65129) {
        return 'PE'
    } else if (zipcode >= 66010 && zipcode <= 66054 || zipcode == 66100) {
        return 'CH'
    } else if (zipcode >= 67010 && zipcode <= 67069 || zipcode == 67100) {
        return 'AQ'
    } else if (zipcode >= 70010 && zipcode <= 70059 || zipcode == 70100 || zipcode >= 70121 && zipcode <= 70133) {
        return 'BA'
    } else if (zipcode >= 71010 && zipcode <= 71049 || zipcode == 71100) {
        return 'FG'
    } else if (zipcode >= 72010 && zipcode <= 72029 || zipcode == 72100) {
        return 'BR'
    } else if (zipcode >= 73010 && zipcode <= 73059 || zipcode == 73100) {
        return 'LE'
    } else if (zipcode >= 74010 && zipcode <= 74028 || zipcode == 74100) {
        return 'TA'
    } else if (zipcode >= 75010 && zipcode <= 75029 || zipcode == 75100) {
        return 'MT'
    } else if (zipcode >= 76011 && zipcode <= 76017 || zipcode == 76121 || zipcode == 76123 || zipcode == 76125) {
        return 'BT'
    } else if (zipcode >= 80010 && zipcode <= 80079 || zipcode == 80100 || zipcode >= 80121 && zipcode <= 80148) {
        return 'NA'
    } else if (zipcode >= 81010 && zipcode <= 81059 || zipcode == 81100) {
        return 'CE'
    } else if (zipcode >= 82010 && zipcode <= 82038 || zipcode == 82100) {
        return 'BN'
    } else if (zipcode >= 83010 && zipcode <= 83059 || zipcode == 83100) {
        return 'AV'
    } else if (zipcode >= 84010 && zipcode <= 84099 || zipcode == 84100 || zipcode >= 84121 && zipcode <= 84135) {
        return 'SA'
    } else if (zipcode >= 85010 && zipcode <= 85059 || zipcode == 85100) {
        return 'PZ'
    } else if (zipcode >= 86010 && zipcode <= 86049 || zipcode == 86100) {
        return 'CB'
    } else if (zipcode >= 86070 && zipcode <= 86097 || zipcode == 86170) {
        return 'IS'
    } else if (zipcode >= 87010 && zipcode <= 87076 || zipcode == 87100) {
        return 'CS'
    } else if (zipcode >= 88020 && zipcode <= 88070 || zipcode == 88100) {
        return 'CZ'
    } else if (zipcode >= 88811 && zipcode <= 88842 || zipcode == 88900) {
        return 'KR'
    } else if (zipcode >= 89010 && zipcode <= 89069 || zipcode == 89100 || zipcode >= 89121 && zipcode <= 89135) {
        return 'RC'
    } else if (zipcode >= 89812 && zipcode <= 89868 || zipcode == 89900) {
        return 'VV'
    } else if (zipcode >= 90010 && zipcode <= 90049 || zipcode == 90100 || zipcode >= 90121 && zipcode <= 90151) {
        return 'PA'
    } else if (zipcode >= 91010 && zipcode <= 91029 || zipcode == 91100) {
        return 'TP'
    } else if (zipcode >= 92010 && zipcode <= 92029 || zipcode == 92100) {
        return 'AG'
    } else if (zipcode >= 93010 && zipcode <= 93019 || zipcode == 93100) {
        return 'CL'
    } else if (zipcode >= 94010 && zipcode <= 94019 || zipcode == 94100) {
        return 'EN'
    } else if (zipcode >= 95010 && zipcode <= 95049 || zipcode == 95100 || zipcode >= 95121 && zipcode <= 95131) {
        return 'CT'
    } else if (zipcode >= 96010 && zipcode <= 96019 || zipcode == 96100) {
        return 'SR'
    } else if (zipcode >= 97010 && zipcode <= 97019 || zipcode == 97100) {
        return 'RG'
    } else if (zipcode >= 98020 && zipcode <= 98079 || zipcode == 98100 || zipcode >= 98121 && zipcode <= 98168) {
        return 'ME'
    } else {
        return 'Zipcode not found'
    }
}


