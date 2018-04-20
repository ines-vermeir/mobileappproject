import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';

/**
 * Generated class for the LabotafelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-labotafel',
  templateUrl: 'labotafel.html',
})
export class LabotafelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

 }
/*$this.controller('MediaCtrl', function($scope, $ionicModal) {
 	$scope.allImages = [{
 		'src' : 'img/pipette.jpg'
 	}];

 	$scope.showImages = function(index) {
 		$scope.activeSlide = index;
 		$scope.showModal('templates/image-popover.html');
 	}

 	$scope.showModal = function(templateUrl) {
 		$ionicModal.fromTemplateUrl(templateUrl, {
 			scope: $scope,
 			animation: 'slide-in-up'
 		}).then(function(modal) {
 			$scope.modal = modal;
 			$scope.modal.show();
 		});
 	}

 	// Close the modal
 	$scope.closeModal = function() {
 		$scope.modal.hide();
 		$scope.modal.remove()
 	};
}*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad LabotafelPage');
  }


}
