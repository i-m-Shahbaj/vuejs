<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   <div class="row">
                       <div class="col-md-6">
                           <img src="" height="200px" width="200px"/>
                       </div>
                       <div class="col-md-6">
                           <div class="profile">
                               <img src="profileInfo.profile_image_url"><span>{{profileInfo.name}}</span>
                           </div>
                           <div class="comments">
                               <ul>
                                   <li v-for="(comment, index) in comments" :key="index"><b>{{comment.user}}</b>&nbsp;<p>{{comment.content}}</p></li>
                               </ul>

                           </div>
                       </div>
                   </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'modal',
  props: ['comments', 'profile']
}
</script>
