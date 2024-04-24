const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, setData: any, data: any) => {
    const { name, value } = e.target;
    setData(() => ({
        ...data,
        [name]: value
    }));
};


export {onChangeInput}