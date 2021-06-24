import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import List from '../components/List';

LocaleConfig.locales['mx'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['Ene','Feb.','Mar','Abr','May','Jun','Jul.','Ago','Sep','Oct','Nov','Dic'],
    dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
};

LocaleConfig.defaultLocale = 'mx';

export default function Dates() {
    return (
        <View style={ styles.view }>

            <Calendar 
                style={ styles.calendar_background }
                current={'2021-04-05'}
                onDayPress={
                    day => console.log('dia: ', day)
                }
                monthFormat={'MMMM yyyy'}
                onMonthChange={
                    month => console.log('mes: ', month)
                }
                hideExtraDays={true}
                firstDay={1}
                theme={{
                    backgroundColor: '#010b8b',
                    calendarBackground: '#010b8b',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#0be7fb',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#0be7fb',
                    todayTextColor: '#fecc50',
                    dayTextColor: '#0be7fb',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: '#fecc50',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#fecc50',
                    indicatorColor: '#fecc50',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                }}
            />

            <List />

        </View>
    )
}

/*
#ff6d69 NARANJA 
#fecc50 AMARILLO
#0be7fb AZUL BAJO
#010b8b AZUL REY
#1e0521 VINO
*/

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#010b8b',
        height: '100%',
    },
    calendar_background: {
        backgroundColor: '#010b8b',
    },

})