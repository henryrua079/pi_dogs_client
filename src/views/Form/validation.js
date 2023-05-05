const validate = (input) => { 
    const errors = {};
    const regex = /^[0-9]+$/;

    errors.name = !input.name.length ? 'Name is required' : ''

    //!------------------------

    errors.height_min = !input.height_min.length || !input.height_min.match(regex)
        ? 'Height_min must be a number'
        : ''

    errors.height_max = !input.height_max.length || !input.height_max.match(regex)
        ? 'Height_max must be a number'
        : ''

    if (input.height_min && input.height_max) {
        if (parseInt(input.height_min) > 0 && parseInt(input.height_min) < parseInt(input.height_max)) {
            errors.height_min = '';
            errors.height_max = '';
        } else {
            errors.height_max = 'Height_max must be greater';
        }
    }

    //!------------------------------------------

    errors.weight_min = !input.weight_min.length || !input.weight_min.match(regex)
        ? 'Weight_min must be a number'
        : ''

    errors.weight_max = !input.weight_max.length || !input.weight_max.match(regex)
        ? 'Weight_max must be a number'
        : ''

    if (parseInt(input.weight_min) && parseInt(input.weight_max)) {
        if (parseInt(input.weight_min) > 0 && parseInt(input.weight_min) < parseInt(input.weight_max)) {
            errors.weight_min = ''
            errors.weight_max = ''
        } else {
            errors.weight_max = 'Weight_max must be greater';
        }
    }
    //!-------------------------------------


    errors.life_span_min = !input.life_span_min.length || !input.life_span_min.match(regex)
        ? 'Life_span_min must be a number'
        : ''

    errors.life_span_max = !input.life_span_max.length || !input.life_span_max.match(regex)
        ? 'Life_span_max must be a number'
        : ''

    if (parseInt(input.life_span_min) && parseInt(input.life_span_max)) {
        if (parseInt(input.life_span_min) > 0 && parseInt(input.life_span_min) < parseInt(input.life_span_max)) {
            errors.life_span_min = ''
            errors.life_span_max = ''
        } else {
            errors.life_span_max = 'Life_span_max must be greater';
        }
    }


    if (input.temperaments.length === 0) {
        errors.temperaments = 'Please select at least 1 temperament';
    } else {
        errors.temperaments = '';
    }


    return errors;
}

export default validate;