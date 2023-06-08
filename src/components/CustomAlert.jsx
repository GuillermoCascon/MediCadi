const CustomAlert = ({alrt}) => {
    return(
        <div className={`${alrt.error ? 'from-red-400 to-red-600': 'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
            {alrt.msg}
        </div>
    )
}

export default CustomAlert