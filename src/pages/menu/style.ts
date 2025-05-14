import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E6F0FB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    boxSearch:{
        width: '100%',
        maxWidth: 700,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderColor: '#96C8FF',
        paddingLeft: 5
    },
    search:{
        height: '100%',
        width: '100%',
        borderRadius: 8,
        paddingLeft: 8,
        fontSize: 20,
    },
    boxAbout:{
        width: '100%',
        maxWidth: 700,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 8,
    },
    imageBackground:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBorder:{
        borderWidth: 2,
        borderColor: '#96C8FF',
        borderRadius: 8,
    },
    boxTextImage:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 700
    },
    textImage:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#083072',
        width: '100%',
        maxWidth: 700,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
    },
    boxOptions:{
        width: '100%',
        maxWidth: 700,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingHorizontal: 10
    },
    backGroundButtons:{
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3
    },
    boxButtons:{
        alignItems: 'center',
    },
    textCaptionButtons:{
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        color: '#083072',
    },
    boxCampaigns:{
        borderWidth: 2,
        width: '100%',
        maxWidth: 700,
        height: 350,
        marginTop: 30,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: '#96C8FF',
        paddingHorizontal: 20
    },
    titleCampaign:{
        fontSize: 18,
        textAlign: 'left',
        color: '#083072',
        marginTop: 10,
        marginBottom: 5
    },
    boxImages:{
        width: '100%',
        height: 80,
        marginTop: 15
    },
    imageCampaign:{
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    imageCampaignBorder:{
        borderRadius: 8,
    },
    textCampaign:{
        fontSize: 22,
        textAlign: 'center',
        color: '#083072',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    scrollView:{
        marginBottom: 10,
        borderRadius: 8
    },
    containerTabBar:{
        width: '100%',
        height: 80,
        backgroundColor: '#E6F0FB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBar:{
        width:'100%',
        maxWidth: 700,
        height:'100%',
        borderWidth: 1,
        borderColor: 'rgba(5, 5, 5, 0.3)',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    }
})