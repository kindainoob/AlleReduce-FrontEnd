
let allergys = $('.allergy:checked').map(() => {
  return $(this).val();
}).get();
