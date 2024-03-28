function createResponse(type, action, data){
    return {
        meta: {
          type,
          action
        },
        data,
      }   
}

function createPaginateResponse(type,page,pageSize,rowCount,items){
  const pages = Math.ceil(rowCount/pageSize)

  return{
    meta:{
      type,
      action:"get_list",
      page,
      page_size:pageSize,
      pages:pages,
      is_first_page:page<=1,
      is_last_page:page>=pages,
    },
    data:items,
  }

}

function errorResponse(id) {
  return {
    meta: {
      type: "error",
    },
    data: id,
  };
}


module.exports = {createResponse,createPaginateResponse,errorResponse};