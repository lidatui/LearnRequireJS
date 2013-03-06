
requirejs.config({
    paths: {
        "mmGrid": "component/mmGrid/mmGrid"
    },
    shim: {
        'mmGrid': ['plugins!component/mmGrid/mmGrid.css']
    }
});