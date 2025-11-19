function InputFieldCheckbox(props){
    const checkBoxList = props.list;
    
    return (
        <div className='content-form'>
            <div className='content-label'>
                <span>{props.label}: </span>
            </div>
            <div className='input-select'>
                {
                    checkBoxList.map((item) =>
                        <div className="checkbox-div">
                            <label for={`${props.aaID}-${item.key}`}>{item.value}</label>
                            <input type='checkbox' id={`${props.aaID}-${item.key}`} name={item.name} value={item.value} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default InputFieldCheckbox;