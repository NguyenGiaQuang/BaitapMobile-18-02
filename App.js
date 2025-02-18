import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validatePhoneNumber = (text) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(text)) {
      setMessage("Hợp lệ");
      setIsValid(true);
    } else {
      setMessage("Số điện thoại không đúng định dạng. Vui lòng nhập lại.");
      setIsValid(false);
    }
  };
const handleInputChange = (text) => {
  const filteredText = text.replace(/[^0-9*#+.]/g, "");
  setPhoneNumber(filteredText);
  validatePhoneNumber(filteredText);
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.subtitle}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Nhập số điện thoại..."
        value={phoneNumber}
        onChangeText={handleInputChange}
        maxLength={12}
      />
      {message !== "" && (<Text style={[styles.message, {color: isValid ? "green" : "red"}]}>{message}</Text>)}
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: isValid ? "#007BFF" : "#A0A0A0"}]} onPress={() => alert("Đăng nhập thành công!")}
       disabled={!isValid}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 12,
    borderRadius: 1,
    fontSize: 16,
    marginBottom: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    color: "red",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PhoneNumberInput;