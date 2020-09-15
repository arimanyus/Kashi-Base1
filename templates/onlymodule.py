import streamlit as st

st.title("Calculate Bottlenecking")

st.header("Start calculating here")

nvidia_list = {'GTX 1660':'47'}
amd_list = {'Radeon 480X':'32'}

#GPU Select
gpu_mfg = st.selectbox("Select GPU Manufacturer",["AMD","Nvidia"])
st.write("You selected ",gpu_mfg+". Great choice!")

if gpu_mfg=='Nvidia':
    gpu = st.selectbox("Select GPU",['GTX 1660'])
elif gpu_mfg=='AMD':
    amd_l2 = ['R23']
    gpu = st.selectbox("Select GPU",["Radeon 480X","Radeon R335"])
    st.write(amd_list[gpu])

ram_pwr = st.radio("Select RAM type",["DDR2","DDR3","DDR4"])
ram = st.selectbox("Select RAM frequency",["2133 Mhz","2933 Mhz","3000 Mhz", "3200 Mhz", "3600 Mhz", "4000 Mhz", "4200 Mhz",])