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