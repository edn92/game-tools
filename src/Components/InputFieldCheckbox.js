function InputFieldCheckbox(props){
    const checkBoxList = props.list;
    
    return (
        <div className='content-form'>
            <div className='content-label'>
                <label>{props.label}: </label>
            </div>
            <div className='input-select'>
                {
                    checkBoxList.map((item) =>
                        <div>
                            <label for={item.id}>{item.value}</label>
                            <input type='checkbox' id={props.aaID + '-' + item.key} name={item.name} value={item.value} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default InputFieldCheckbox;