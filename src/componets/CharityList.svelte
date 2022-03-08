<script>
import Modal from "./Modal.svelte"

import { charities } from "../Data/charity";

let isModalOpen = false;

function calculateFunded(pledged, target) {
        return Math.round((1 / (target/pledged)) * 100);
    }
    function formatCurrency(nominal) {
        return nominal.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });
    }

    function  calculateDaysRemaining(date_end) {
        const delta = date_end - new Date();

        const oneDey = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs(delta / oneDey));
    }

    // function handleButton() {
    //     isModalOpen = true;
    // }    

    function handelCloseModal() {
        isModalOpen = false;
    }
</script>

<style>
    .xs-list-with-content {
        font-size: 12px;
    }
    .show {
        display: block;
        background-color: rgba(0, 0, 0,0.55);
        z-index: 99; 
    }
</style>
<!-- popularCauses section -->
<section id="popularcause" class="bg-gray waypoint-tigger xs-section-padding">
    <div class="container">
        <div class="xs-heading row xs-mb-60">
            <div class="col-md-9 col-xl-9">
                <h2 class="xs-title">Popular Causes</h2>
                <span class="xs-separetor dashed"></span>
                <p>FundPress has built a platform focused on aiding entrepreneurs, startups, and <br> companies
                    raise capital from anyone.</p>
            </div><!-- .xs-heading-title END -->
        </div><!-- .row end -->
        {#if charities !== undefined}
        {#each charities as  Charity}
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <!-- modal goes here -->
                    {#if isModalOpen === true}
                    <Modal>
                         
                         <!-- Modal -->
                    <div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{Charity.title}
                                    </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" 
                                on:click={handelCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputAmount">Amount donation</label>
                                        <input required type="number" class="form-control" id="exampleInputAmount"
                                            aria-describedby="amountHelp" placeholder="Enter amount">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName">Your name</label>
                                        <input required type="text" class="form-control" id="exampleInputName"
                                            aria-describedby="nameHelp" placeholder="Enter full name">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input required type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email">
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">I Agree</label>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                    </Modal>
                    {/if}
                    <div class="xs-popular-item xs-box-shadow">
                        <div class="xs-item-header">

                            <img src="{Charity.thumbnail}" alt="">

                            <div class="xs-skill-bar">
                                <div class="xs-skill-track">
                                    <p>
                                        <span class="number-percentage-count number-percentage"
                                                data-value="90"
                                                data-animation-duration="3500">{calculateFunded(Charity.pledged, Charity.target)}
                                        </span>%
                                    </p>
                                </div>
                            </div>
                        </div> 
                        <div class="xs-item-content">
                            <ul class="xs-simple-tag xs-mb-20">
                                <li><a href="">{Charity.category}</a></li>
                            </ul>

                            <a href="#" class="xs-post-title xs-mb-30">{Charity.title}</a>

                            <ul class="xs-list-with-content" >
                                <li>{formatCurrency(Charity.pledged)}<span>Pledged</span></li>
                                <li><span class="number-percentage-count number-percentage" data-value="90"
                                        data-animation-duration="3500">{calculateFunded(Charity.pledged, Charity.target)}</span>
                                        %<span>Funded</span>
                                </li>
                                <li>{calculateDaysRemaining(Charity.date_end)}<span>Days to go</span></li>
                            </ul>

                            <span class="xs-separetor"></span>

                            <div class="row xs-margin-0">
                                <div class="xs-round-avatar">
                                    <img src="{Charity.profile_foto}" alt="">
                                </div>
                                <div class="xs-avatar-title">
                                    <a href="#"><span>By</span>{Charity.profile_name}</a>
                                </div>
                            </div>

                            <span class="xs-separetor"></span>

                            <a href="/Donation/{Charity.id}" data-toggle="modal" data-target="#exampleModal"
                                class="btn btn-primary btn-block">
                                Donate This Cause
                            </a>
                        </div><!-- .xs-item-content END -->
                    </div><!-- .xs-popular-item END -->
                </div>
            </div><!-- .row end -->
        {/each}
        {/if}
    </div><!-- .container end -->
</section> 





<!--<script>
    export let charities;
</script>

<div>
    <h2>Daftar charity</h2>
    {#if charities !== undefined}
    <ul>
        {#each charities as  Charity}
        
        <li>{Charity}</li>
        {/each}
    </ul>
    {:else}
    <h5>bahwa data belum tersedia</h5>
    {/if}
</d>iv>-->