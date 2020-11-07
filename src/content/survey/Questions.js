import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

export default class Questions extends Component {
    state = {
        A1: null, 
        A2: null
    }
    render() {
        return (

            <View style={styles.container}>
            
            <Text style= {styles.txt}>1. Şu an ne yapıyorsun? (Dinlenme, iş veya çalışma, hijyen, yeme / içme, boş zaman, diğer,
                hiçbir şey)</Text>
            <TextInput
               placeholder="Answer 1" 
               style={styles.input} 
               value={this.state.A1}
               onChangeText={ A1 => this.setState({A1})}
            />

            <Text style={styles.txt}>2. Şu an nasıl hissediyorsunuz ve derecesi 1-10 arasında nedir? (Neşeli, Güvensiz, Rahat,
                Rahatsız, Memnun, Yalnız, Endişeli, Suçlu, Öfkeli, Mutlu, Mutsuz, Nötr, Üzgün, Korkmuş, Diğer) </Text>
            <TextInput 
               placeholder="Answer 2" 
               style={styles.input}
                value={this.state.A2}
                onChangeText={A2 => this.setState({A2})}
            />

            <Text style= {styles.txt}>3. Şu an yanında kim var? Ona karşı ne hissediyorsun? (Ortak, yönetici, şirket sahibi, aile bireyi,
                arkadaş(lar), meslektaş(lar), tanıdık(lar), yabancı(lar) / diğerleri, hiç kimse)</Text>
            <TextInput
               placeholder="Answer 3" 
               style={styles.input} 
               value={this.state.A3}
               onChangeText={ A3 => this.setState({A3})}
           />

            <Text style= {styles.txt}>4. Çalıştığın ortamda seni şu an rahatsız eden bir olay ya da kişi var mı? (Evet, hayır,
                bilmiyorum)</Text>
            <TextInput
               placeholder="Answer 4" 
               style={styles.input} 
               value={this.state.A4}
               onChangeText={ A4 => this.setState({A4})}
            />
            
            <Text style= {styles.txt}>5. Şimdi başka bir yerde olmayı veya yalnız olmayı ister miydin? (Evet, hayır, bilmiyorum)</Text>
            <TextInput
               placeholder="Answer 5" 
               style={styles.input} 
               value={this.state.A5}
               onChangeText={ A5 => this.setState({A5})}
            />
            
            <Text style= {styles.txt}>6. En son deneyimini yazdıktan sonra gerçekleşen en önemli olay ne idi? (Açık uçlu
                olarak doldurulacaktır.)</Text>
            <TextInput
               placeholder="Answer 6" 
               style={styles.input} 
               value={this.state.A6}
               onChangeText={ A6 => this.setState({A6})}
            />
            
            <Text style= {styles.txt}>7. Bugün sana tanımlanan işi yapabilecek yeterlilikte hissediyor musun? (Evet, hayır,
                bilmiyorum)</Text>
            <TextInput
               placeholder="Answer 7" 
               style={styles.input} 
               value={this.state.A7}
               onChangeText={ A7 => this.setState({A7})}
            />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        padding:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    
    },
    txt:{
        fontSize:16,
        padding:5
    
    }
   
});