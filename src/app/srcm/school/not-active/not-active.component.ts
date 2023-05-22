import { Component, OnInit } from "@angular/core";
import { DialongService } from "../../../service/Dialong/dialong.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MasterService } from "../../../service/master/master.service";
import { ToasterService } from "../../../service/Toaster/toaster.service";
import { ToasterPosition } from "../../../service/Toaster/ToastConfig";

@Component({
  selector: "ngx-not-active",
  templateUrl: "./not-active.component.html",
  styleUrls: ["./not-active.component.scss"],
})
export class NotActiveComponent implements OnInit {
  principleDetails = false;
  schoolDetails = false;
  loading = false;
  schoolDetailform: FormGroup;
  schoolFounderDetailform: FormGroup;
  schoolPrincipleDetailform: FormGroup;
  selectedFile: File = null;
  imagesList: any;
  imageName: any;
  constructor(
    private _dialong: DialongService,
    private _router: Router,
    private _fb: FormBuilder,
    private _api: MasterService,
    private _toast: ToasterService
  ) {
    this.forminit();
  }

  ngOnInit(): void {
    console.log("hello");
    // this.getImage();

    // this._dialong.OpenDialong()
  }
  forminit() {
    this.schoolDetailform = this._fb.group({
      schoolname: [""],
      schoolcode: [""],
      schoolnumber: [""],
      schoolemail: [""],
      schoolwebsite: [""],
      state: [""],
      district: [""],
      post: [""],
      city: [""],
      pincode: [
        "",
        [Validators.required, Validators.maxLength(6), Validators.minLength(6)],
      ],
      nearby: [""],
      schoollogo: [""],
      address: [""],
    });
    this.schoolFounderDetailform = this._fb.group({
      fname: [""],
      femail: [""],
      fnumber: [""],
    });
    this.schoolPrincipleDetailform = this._fb.group({
      fname: [""],
      femail: [""],
      fnumber: [""],
    });
  }

  princeple(type) {
    if (type == "pr") {
      this.principleDetails = true;
      this.schoolDetails = false;
    } else {
      this.principleDetails = false;
      this.schoolDetails = true;
    }
  }
  getAddress(data) {
    this.loading = true;
    let pincode = data.value;
    if (pincode.length == 6) {
      console.log("this is pincode", pincode);
      this._api.getAddress(pincode).subscribe({
        next: (res) => {
          if (res.message == "Successfully" && res.success == true) {
            this.schoolDetailform.patchValue({
              state: res.responseData.statename,
              city: res.responseData.Taluk,
              district: res.responseData.Districtname,
              post: res.responseData.Taluk,
            });
            this.loading = false;
          } else {
            this.loading = false;
            this._toast.ToastMe(
              ToasterPosition.TOP_LEFT,
              "warning",
              "Pincode warning",
              "no such pincode found"
            );
          }
        },
      });
    }
  }

  //  Posting school details

  met() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 5000);
  }

  uploadLogo(event) {
    this.loading = true;
    debugger
    this.selectedFile = <File>event.target.files[0];
    this.imageName = this.selectedFile.name;
    const fd = new FormData();
    fd.append("file", this.selectedFile);
    // fd.append('image',  this.selectedFile.name);
    this._api.post("commonAPI", "upload", fd).subscribe({
      next: (res) => {
        this.loading = false;
        console.log("response image ",res);
        this._toast.ToastMe(ToasterPosition.TOP_LEFT,'success','Image','Image uploaded successfully');
        this.getImage();
      },
      error: (err) => {
        this.loading = false;
        this._toast.ToastMe(ToasterPosition.TOP_LEFT,'danger','Image',err.message)

        console.log("response image ",err);
      },
    });
  }

  AddNewSchool() {
    this.schoolDetailform.controls['schoollogo'].setValue(this.imageName);
    const data = {
      schoolname: this.schoolDetailform.controls["schoolname"].value,
      schoolcode: this.schoolDetailform.controls["schoolcode"].value,
      schoolnumber: this.schoolDetailform.controls["schoolnumber"].value,
      schoolemail: this.schoolDetailform.controls["schoolemail"].value,
      schoolwebsite: this.schoolDetailform.controls["schoolwebsite"].value,
      state: this.schoolDetailform.controls["state"].value,
      district: this.schoolDetailform.controls["schoolname"].value,
      post: this.schoolDetailform.controls["post"].value,
      city: this.schoolDetailform.controls["city"].value,
      pincode: this.schoolDetailform.controls["pincode"].value,
      nearby: this.schoolDetailform.controls["nearby"].value,
      schoollogo: this.schoolDetailform.controls["schoollogo"].value,
      address: this.schoolDetailform.controls["address"].value,
      schoolFounderDetails: this.schoolFounderDetailform.value,
      schoolPrincipleDetails: this.schoolPrincipleDetailform.value,

      // this.schoolFounderDetailform =  this._fb.group({
      //   fname:this.schoolDetailform.controls['schoolname'].value,
      //   femail:this.schoolDetailform.controls['schoolname'].value,
      //   fnumber:this.schoolDetailform.controls['schoolname'].value,
      // });
      // this.schoolPrincipleDetailform = this._fb.group({
      //   fname:this.schoolDetailform.controls['schoolname'].value,
      //   femail:this.schoolDetailform.controls['schoolname'].value,
      //   fnumber:this.schoolDetailform.controls['schoolname'].value,
      // })
    };
    console.log("this is form data", data);
  }

  // get images
  getImage(){
   let  imgname = this.imageName;
    this._api.getImages(imgname).subscribe({
      next:res=>{
        console.log(res);
        this.imagesList = res.file_url;
      },
      error:err=>{
        console.log("images error",err);
      }
    })
  }
}
