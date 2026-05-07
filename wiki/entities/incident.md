---
logical: "incident"
display: "Case"
entitySetName: "incidents"
primaryId: "incidentid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["caso", "casi", "ticket", "segnalazione", "richiesta assistenza"]
synonyms_en: ["case", "ticket", "incident", "support case"]
---

# Case

Service request case associated with a contract.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `incident` |
| Display name | Case |
| Display (plural) | Cases |
| Schema name | `Incident` |
| Entity set (Web API) | `incidents` |
| Primary id attribute | `incidentid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/incidents?$select=title&$top=10
GET /api/data/v9.2/incidents(<guid>)
POST /api/data/v9.2/incidents
PATCH /api/data/v9.2/incidents(<guid>)
DELETE /api/data/v9.2/incidents(<guid>)
```

## Attributes

Writable: **74** · Read-only: **29**

### Writable

`ActivitiesComplete`, `ActualServiceUnits`, `BilledServiceUnits`, `BlockedProfile`, `CaseOriginCode`, `CaseTypeCode`, `CheckEmail`, `ContractDetailId`, `ContractId`, `ContractServiceLevelCode`, `CustomerContacted`, `CustomerId`, `CustomerIdType`, `CustomerSatisfactionCode`, `deactivatedon`, `DecrementEntitlementTerm`, `Description`, `EmailAddress`, `EntitlementId`, `EntityImage`, `ExistingCase`, `FirstResponseByKPIId`, `FirstResponseSent`, `FirstResponseSLAStatus`, `FollowupBy`, `FollowUpTaskCreated`, `ImportSequenceNumber`, `IncidentId`, `IncidentStageCode`, `InfluenceScore`, `IsDecrementing`, `IsEscalated`, `KbArticleId`, `LastOnHoldTime`, `MasterId`, `MessageTypeCode`, `msdyn_aiagentstatus`, `msdyn_casesentiment`, `msdyn_CaseSurveyInviteUrl`, `msdyn_copilotengaged`, `msdyn_iotalert`, `msdyn_precreateattachmentsid`, `msdyn_precreatenotesid`, `nextsla`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentCaseId`, `PrimaryContactId`, `PriorityCode`, `ProcessId`, `ProductId`, `ProductSerialNumber`, `ResolveBy`, `ResolveByKPIId`, `ResolveBySLAStatus`, `ResponseBy`, `ResponsibleContactId`, `RouteCase`, `SentimentValue`, `ServiceStage`, `SeverityCode`, `SLAId`, `SocialProfileId`, `StageId`, `StateCode`, `StatusCode`, `SubjectId`, `TicketNumber`, `TimeZoneRuleVersionNumber`, `Title`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`AccountId`, `caseage`, `ContactId`, `CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `EscalatedOn`, `ExchangeRate`, `lastinteraction`, `Merged`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `NumberOfChildIncidents`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (30)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_incidents` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `contact_as_primary_contact` | [contact](contact.md) | `primarycontactid` | `primarycontactid` |
| `contact_as_responsible_contact` | [contact](contact.md) | `responsiblecontactid` | `responsiblecontactid` |
| `contract_cases` | [contract](contract.md) | `contractid` | `contractid` |
| `contract_detail_cases` | [contractdetail](contractdetail.md) | `contractdetailid` | `contractdetailid` |
| `entitlement_cases` | [entitlement](entitlement.md) | `entitlementid` | `entitlementid` |
| `incident_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `incident_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `incident_existingcase` | [incident](incident.md) | `existingcase` | `existingcase` |
| `incident_master_incident` | [incident](incident.md) | `masterid` | `masterid` |
| `incident_parent_incident` | [incident](incident.md) | `parentcaseid` | `parentcaseid` |
| `kbarticle_incidents` | [kbarticle](kbarticle.md) | `kbarticleid` | `kbarticleid` |
| `lk_incidentbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_incidentbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_incidentbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_incidentbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `manualsla_cases` | [sla](sla.md) | `slaid` | `slaid_sla` |
| `msdyn_incident_msdyn_aiagentstatus` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `msdyn_aiagentstatus` | `msdyn_aiagentstatus` |
| `msdyn_msdyn_iotalert_incident_IoTAlert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_iotalert` | `msdyn_IoTAlert` |
| `owner_incidents` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_incident` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `product_incidents` | [product](product.md) | `productid` | `productid` |
| `sla_cases` | [sla](sla.md) | `slainvokedid` | `slainvokedid_sla` |
| `slakpiinstance_incident_firstresponsebykpi` | [slakpiinstance](slakpiinstance.md) | `firstresponsebykpiid` | `firstresponsebykpiid` |
| `slakpiinstance_incident_resolvebykpi` | [slakpiinstance](slakpiinstance.md) | `resolvebykpiid` | `resolvebykpiid` |
| `socialprofile_cases` | [socialprofile](socialprofile.md) | `socialprofileid` | `socialprofileid` |
| `subject_incidents` | [subject](subject.md) | `subjectid` | `subjectid` |
| `system_user_incidents` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_incidents` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_Incident` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (74)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bpf_incident_msdyn_iottocaseprocess` | _n/a_ | `bpf_incidentid` | _n/a_ |
| `incident_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Incident_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Incident_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_connections1` | _n/a_ | `record1id` | _n/a_ |
| `incident_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Incident_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Incident_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Incident_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_existingcase` | _n/a_ | `existingcase` | _n/a_ |
| `Incident_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_IncidentResolutions` | _n/a_ | `incidentid` | _n/a_ |
| `Incident_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_master_incident` | _n/a_ | `masterid` | _n/a_ |
| `incident_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_parent_incident` | _n/a_ | `parentcaseid` | _n/a_ |
| `Incident_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_Posts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incident_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Incident_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `incident_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Incident_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_incidents` | _n/a_ | `incidentid` | _n/a_ |
| `lk_phonetocaseprocess_incidentid` | _n/a_ | `incidentid` | _n/a_ |
| `msdyn_autocaseclosureagentactivity_regarding_incident` | _n/a_ | `msdyn_regarding` | _n/a_ |
| `msdyn_autocaseclosureagentmonitoring_regarding_incident` | _n/a_ | `msdyn_regarding` | _n/a_ |
| `msdyn_incident_feedback_context` | _n/a_ | `msdyn_contextobjectid` | _n/a_ |
| `msdyn_incident_msdyn_aicontactsuggestion_sourcerecord` | _n/a_ | `msdyn_sourcerecord` | _n/a_ |
| `msdyn_incident_msdyn_autocaseclosureagentactivity_incidentid` | _n/a_ | `msdyn_incidentid` | _n/a_ |
| `msdyn_incident_msdyn_autocaseclosureagentmonitoring_incidentid` | _n/a_ | `msdyn_incidentid` | _n/a_ |
| `msdyn_incident_msdyn_caseenrichment_caseid` | _n/a_ | `msdyn_caseid` | _n/a_ |
| `msdyn_incident_msdyn_casesuggestion_suggestedentity` | _n/a_ | `msdyn_suggestedentity` | _n/a_ |
| `msdyn_incident_msdyn_casesuggestionrequestpayload_caseid` | _n/a_ | `msdyn_caseid` | _n/a_ |
| `msdyn_incident_msdyn_casetopic_incident_incidentid` | _n/a_ | `msdyn_incidentid` | _n/a_ |
| `msdyn_incident_msdyn_federatedarticleincident_IncidentId` | _n/a_ | `msdyn_incidentid` | _n/a_ |
| `msdyn_incident_msdyn_intententity_objectid` | _n/a_ | `msdyn_objectid` | _n/a_ |
| `msdyn_incident_msdyn_iotalert_Case` | _n/a_ | `msdyn_case` | _n/a_ |
| `msdyn_incident_msdyn_ocliveworkitem` | _n/a_ | `msdyn_issueid` | _n/a_ |
| `msdyn_incident_msdyn_originatingqueue_createdincidentid` | _n/a_ | `msdyn_createdincidentid` | _n/a_ |
| `msdyn_incident_msdyn_productmap_msdyn_recordid` | _n/a_ | `msdyn_recordid` | _n/a_ |
| `msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity` | _n/a_ | `msdyn_suggestedentity` | _n/a_ |
| `msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor` | _n/a_ | `msdyn_suggestionfor` | _n/a_ |
| `msdyn_incident_msdyn_suggestionrequestpayload` | _n/a_ | `msdyn_suggestionfor` | _n/a_ |
| `msdyn_intentcontexthistory_poly_incident` | _n/a_ | `msdyn_relatedrecordid` | _n/a_ |
| `msdyn_msdyn_evaluation_incident_msdyn_RegardingObjectId` | _n/a_ | `msdyn_regardingobjectid` | _n/a_ |
| `msdyn_nextaction_regarding_incident` | _n/a_ | `msdyn_regarding` | _n/a_ |
| `msdyn_readtracker_poly_incident` | _n/a_ | `msdyn_regardingobjectid` | _n/a_ |
| `msdyn_relatedentity_msdyn_entityattachment` | _n/a_ | `msdyn_relatedentity` | _n/a_ |
| `msdyn_swarm_incident` | _n/a_ | `msdyn_swarmrelatedrecordid` | _n/a_ |
| `msdyn_timetracker_regardingentity_Incident` | _n/a_ | `msdyn_regardingentity` | _n/a_ |
| `OriginatingCase_Lead` | _n/a_ | `originatingcaseid` | _n/a_ |
| `slakpiinstance_incident` | _n/a_ | `regarding` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `KnowledgeBaseRecord_Incident` | [incidentid](incidentid.md) | _n/a_ | _n/a_ |
| `msdyn_incident_msdyn_customerasset` | [incidentid](incidentid.md) | _n/a_ | _n/a_ |

## Source

Generated from [incident.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/incident.md) on 2026-05-06.