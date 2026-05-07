---
logical: "msdyn_bookingsetupmetadata"
display: "Metadati di configurazione prenotazione"
entitySetName: "msdyn_bookingsetupmetadatas"
primaryId: "msdyn_bookingsetupmetadataid"
primaryName: "msdyn_entitylogicalname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metadati di configurazione prenotazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookingsetupmetadata` |
| Display name | Metadati di configurazione prenotazione |
| Display (plural) | Record dei metadati di configurazione prenotazione |
| Schema name | `msdyn_bookingsetupmetadata` |
| Entity set (Web API) | `msdyn_bookingsetupmetadatas` |
| Primary id attribute | `msdyn_bookingsetupmetadataid` |
| Primary name attribute | `msdyn_entitylogicalname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookingsetupmetadatas?$select=msdyn_entitylogicalname&$top=10
GET /api/data/v9.2/msdyn_bookingsetupmetadatas(<guid>)
POST /api/data/v9.2/msdyn_bookingsetupmetadatas
PATCH /api/data/v9.2/msdyn_bookingsetupmetadatas(<guid>)
DELETE /api/data/v9.2/msdyn_bookingsetupmetadatas(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_availabledurationminimumpercentage`, `msdyn_bookingrelationshiplogicalname`, `msdyn_bookingsetupmetadataid`, `msdyn_bookingstatusfieldlogicalname`, `msdyn_cancelbookingswhenmoving`, `msdyn_cloneentityquery`, `msdyn_defaultbookingcanceledstatus`, `msdyn_defaultbookingcommittedstatus`, `msdyn_defaultbookingduration`, `msdyn_defaultrequirementactivestatus`, `msdyn_defaultrequirementcanceledstatus`, `msdyn_defaultrequirementcompletedstatus`, `msdyn_disablerequirementautocreation`, `msdyn_enablequickbook`, `msdyn_entitylogicalname`, `msdyn_ignoretimezoneinscheduleassistant`, `msdyn_requirementrelationshiplogicalname`, `msdyn_resourceavailabilityretrievallimit`, `msdyn_retrieveconstraintsquery`, `msdyn_retrieveresourcesquery`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus` | [bookingstatus](bookingstatus.md) | `msdyn_defaultbookingcanceledstatus` | `msdyn_DefaultBookingCanceledStatus` |
| `msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus` | [bookingstatus](bookingstatus.md) | `msdyn_defaultbookingcommittedstatus` | `msdyn_DefaultBookingCommittedStatus` |
| `msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_cloneentityquery` | `msdyn_CloneEntityQuery` |
| `msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_retrieveconstraintsquery` | `msdyn_RetrieveConstraintsQuery` |
| `msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_retrieveresourcesquery` | `msdyn_RetrieveResourcesQuery` |
| `msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementActiveStatus` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_defaultrequirementactivestatus` | `msdyn_DefaultRequirementActiveStatus` |
| `msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCanceledStatus` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_defaultrequirementcanceledstatus` | `msdyn_DefaultRequirementCanceledStatus` |
| `msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCompletedStatus` | [msdyn_requirementstatus](msdyn_requirementstatus.md) | `msdyn_defaultrequirementcompletedstatus` | `msdyn_DefaultRequirementCompletedStatus` |
| `lk_msdyn_bookingsetupmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bookingsetupmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bookingsetupmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bookingsetupmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bookingsetupmetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bookingsetupmetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bookingsetupmetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bookingsetupmetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_bookingsetupmetadata_bookableresourcebooking` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `msdyn_bookingsetupmetadataid` | `msdyn_BookingSetupMetadataId` |
| `msdyn_msdyn_bookingsetupmetadata_msdyn_resourcerequirement` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `msdyn_bookingsetupmetadataid` | `msdyn_BookingSetupMetadataId` |
| `msdyn_bookingsetupmetadata_SyncErrors` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingsetupmetadata` |
| `msdyn_bookingsetupmetadata_AsyncOperations` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingsetupmetadata` |
| `msdyn_bookingsetupmetadata_MailboxTrackingFolders` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingsetupmetadata` |
| `msdyn_bookingsetupmetadata_UserEntityInstanceDatas` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `objectid` | `objectid_msdyn_bookingsetupmetadata` |
| `msdyn_bookingsetupmetadata_ProcessSession` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingsetupmetadata` |
| `msdyn_bookingsetupmetadata_BulkDeleteFailures` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingsetupmetadata` |
| `msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses` | [msdyn_bookingsetupmetadata](msdyn_bookingsetupmetadata.md) | `objectid` | `objectid_msdyn_bookingsetupmetadata` |


## Source

Generated from [msdyn_bookingsetupmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bookingsetupmetadata')) on 2026-05-07.