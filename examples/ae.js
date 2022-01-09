import { newEvent, Storyboard } from "../index.js";
import { createRequire } from 'module';
const req = createRequire(import.meta.url);


const storyboard = new Storyboard();
const ae = req('../ressources/ae.json');
generateCompositions(ae);

function generateCompositions(ae_data) {

  for (const composition of ae_data) {
    
    for (const layer of composition.layers) {
      generateLayer(layer);
    }

    console.log(`generated composition: ${composition.name}`);
  }

}


function generateLayer(layer_data) {

  switch (layer_data.type) {
    case "Image":
      const sprite = storyboard.createSprite(layer_data.name);
      generateTransforms(sprite, layer_data.transform);
      break;
  
    default:
      console.log(`unknown layer type: ${layer_data.type}`);
      break;
  }
}

function generateTransforms(sprite, transforms) {
  if (transforms.fade) {

    
    const kfs_fade = processFadeKeyframes(transforms.fade);
    for (const kf_fade of kfs_fade) {
      sprite.add('F', kf_fade.times, kf_fade.values);
      
    }
  }

  if (transforms.position) {
    const kfs_move = processMoveKeyframes(transforms.position, sprite);
    console.log(kfs_move);


  }


}

function processFadeKeyframes(transform_parameter) {
  
  if (!transform_parameter.keyframed) {
    return [{
      times: transform_parameter.time,
      values: transform_parameter.value
    }];
  }

  const keyframes = transform_parameter.keyframes;
  let old_keyframe = undefined;
  let pairs = [];
  for (const keyframe of keyframes) {
    
    if (!old_keyframe) {
      old_keyframe = keyframe;
      continue;
    }
    
    if (old_keyframe.value != keyframe.value) {
      pairs.push({
        times: [old_keyframe.time, keyframe.time],
        values: [old_keyframe.value, keyframe.value]
      });
    }
    

    old_keyframe = keyframe;
  }

  return pairs;
}

function processMoveKeyframes(transform_parameter, sprite) {
  let type = "M";
  if (!transform_parameter.xKeyframed) {
    type = "MY";
    sprite.x = transform_parameter.x;
    let kfs_y = processFadeKeyframes(transform_parameter.y);
    console.log(kfs_y);
  } else if (!transform_parameter.yKeyframed) {
    type = "MX";
    sprite.y = transform_parameter.y;
    let kfs_x = processFadeKeyframes(transform_parameter.y);
    console.log(kfs_x);
  } else if (!transform_parameter.xKeyframed && !transform_parameter.yKeyframed) {
    sprite.x = transform_parameter.x;
    sprite.y = transform_parameter.y;
    return;
  }

}

storyboard.write('out.osb');