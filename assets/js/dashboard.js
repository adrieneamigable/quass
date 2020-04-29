$(()=>{
    dashboard = {
        init:()=>{
            $('span.user-fullname').text(fullname);
            $('div.page-name').text(projectName);
        },
        setLocalStorage:(storageName,data)=>{
            sessionStorage.setItem(storageName,data);
        },
        getLocalStorage:(storageName)=>{
            sessionStorage.getItem(storageName);
        },
        deleteStorage:()=>{
            sessionStorage.removeItem('session');
        }
    }

    dashboard.init();
})