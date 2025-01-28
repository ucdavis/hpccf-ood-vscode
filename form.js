/**
 *   Toggle the visibilty of a form group
 *
 *   @param      {string}    form_id  The form identifier
 *   @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibilty_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  if(show) {
    parent.show();
  } else {
    parent.hide();
  }
}

/**
 *  Toggle the visibilty of the gpu form fields when a gpu queue is selected
 *
 *  low2: hidden
 *  gpuh: visible
 *  bgpu: visible
 */
function toggle_gpu_form_visibility() {
  let queue = $("#batch_connect_session_context_auto_queues");
  let gpu_num = $('#batch_connect_session_context_gpu_num');
  let gpu_type = $('#batch_connect_session_context_gpu_type');

  toggle_visibilty_of_form_group(gpu_num, queue.val().includes("gpu"));
  gpu_num.val(0);

  toggle_visibilty_of_form_group(gpu_type, queue.val().includes("gpu"));

  // let fields = [ gpu_num, gpu_type ];

  // fields.map((id) => {
  //   toggle_visibilty_of_form_group(id, queue.val().includes("gpu"));
  // })
}

/**
 *  Event handler to update view on changes to the slurm queue field
 */
function set_gpu_queue_change_handler() {
  let queue = $("#batch_connect_session_context_auto_queues");
  queue.change(toggle_gpu_form_visibility);

}

/**
 *  Install event handlers
 */
$(document).ready(function() {
  /* Ensure that fields are shown or hidden based on what was set in the last session */
  toggle_gpu_form_visibility();
  set_gpu_queue_change_handler();
});
