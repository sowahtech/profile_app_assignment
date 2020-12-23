import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style= {{alignSelf:"center", marginBottom:-70, marginTop:30}}>Edit Profile</Text>
			<View style={styles.hr1}></View>
			<View>
				<Image source = {require('./assets/stud_propix.jpg')} style = {styles.image1}/>
				<Image source = {require('./assets/cam.png')} style = {styles.image2}/>
			</View>

			<View style={styles.mid_container}>
				<Text style= {styles.grey_label}>School</Text>
				<Text>The LawrenceVille School</Text>
				<Text style= {styles.grey_label}>Email Address</Text>
				<Text>danielrozar@gmail.com</Text>
				<Text style= {styles.blue_label}>Name</Text>
				<Text>Daniel Rozar</Text>
				<View style={styles.hr2}></View>
				<Text style= {styles.blue_label}>Nick Name</Text>
				<Text>r.denial</Text>
				<View style={styles.hr2}></View>
				<Text style= {styles.blue_label}>Emergency Contact</Text>
				<Text>+1-987654321</Text>
				<Image source = {require('./assets/phone.jpg')} style = {styles.image3}/>
				<View style={styles.hr2}></View>

			</View>
			<View  style = {styles.btnContainer}>
				<TouchableOpacity style = {styles.btn} activeOpacity = {.5}>
					<Text style={styles.btnText}> UPDATE PROFILE </Text>
				</TouchableOpacity>	
			</View>

    	</View>
  );
}

const styles = StyleSheet.create({
	hr1: {
		alignSelf: 'center',
		width: 350,
		height:2,
		backgroundColor: "grey",
		marginTop :70,
		borderRadius: 10
	},
	container: {
		flex: 1,
		flexDirection: "column"
	},

	mid_container: {
		marginHorizontal: 50
	},

	image1: {
		width: 130,
		height: 130,
		borderRadius: 65,
		marginTop: 100,
		alignSelf: 'center'
	},

	image2: {
		position: "absolute",
		width: 45,
		height: 45,
		borderRadius: 22,
		marginTop: 200,
		marginLeft: 200
	},

	image3: {
		position: "absolute",
		width: 45,
		height: 45,
		marginTop: 310,
		marginLeft: 225
	},

	grey_label: {
		color: 'gray',
		marginTop: 30
	},

	blue_label: {
		color: "blue",
		marginTop: 30
	},

	hr2: {
		marginTop: 5,
		alignSelf: 'center',
		width: 260,
		height:2,
		backgroundColor: "grey",
		borderRadius: 10
	},

	btnContainer: {
		marginTop: 30,
		marginHorizontal: 50,
		height: 100,
			
	},
	btn: {
		marginTop:5,
		paddingTop:15,
		paddingBottom:15,
		marginHorizontal: 5,
		backgroundColor:'#00BCD4',
		borderRadius:30,
		borderWidth: 1,
		borderColor: '#fff'

	},

	btnText: {
		color: 'white',
		alignSelf: "center"
	}


});
