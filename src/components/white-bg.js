const WhiteBg = ({ wBackground, matchesBackground }) => {
    return(
        <div className={`white-bg ${wBackground ? 'white-bg' : 'bg-change' } ${matchesBackground ? 'set-top' : '' }`}>
        </div>
    )
}

export default WhiteBg;