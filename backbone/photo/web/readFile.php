<?php
	
	$ch = $_GET['ch'];
	$sn = $_GET['sn'];

	$query = "ch={$ch}&sn={$sn}";

	$fileName = 'http://image.so.com/zj?'.$query;
	
	// 读取文件
	$reslut = file_get_contents($fileName);
	
	$res = json_decode($reslut);
	
	foreach ($res as $key => $value) {
		
		for ( $i=0; $i<count($value); $i++ ) {
			
			if ( $value[$i] !== null ) {
	
				$arr = array(
					'title' => $value[$i]->group_title,
					'url' => $value[$i]->qhimg_url,
					'width' => $value[$i]->qhimg_width,
					'height' => $value[$i]->qhimg_height
				);
				
				$q = json_encode($arr);
				
				$filename = '../data/imgSo.json';
				$word = $q;
				
				$fh = fopen($filename, "a");
				
				fwrite($fh, $word);
				
				fclose($fh);
				
			}
		}
		
	}
