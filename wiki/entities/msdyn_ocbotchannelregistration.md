---
logical: "msdyn_ocbotchannelregistration"
display: "Bot Channel Registration"
entitySetName: "msdyn_ocbotchannelregistrations"
primaryId: "msdyn_ocbotchannelregistrationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bot Channel Registration

Bot channel registration used for channel integration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocbotchannelregistration` |
| Display name | Bot Channel Registration |
| Display (plural) | Bot Channel Registrations |
| Schema name | `msdyn_ocbotchannelregistration` |
| Entity set (Web API) | `msdyn_ocbotchannelregistrations` |
| Primary id attribute | `msdyn_ocbotchannelregistrationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocbotchannelregistrations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocbotchannelregistrations(<guid>)
POST /api/data/v9.2/msdyn_ocbotchannelregistrations
PATCH /api/data/v9.2/msdyn_ocbotchannelregistrations(<guid>)
DELETE /api/data/v9.2/msdyn_ocbotchannelregistrations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_bottype`, `msdyn_msappid`, `msdyn_name`, `msdyn_ocbotchannelregistrationId`, `msdyn_tenantid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocbotchannelregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocbotchannelregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocbotchannelregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocbotchannelregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocbotchannelregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocbotchannelregistration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocbotchannelregistration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocbotchannelregistration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocbotchannelregistration_msdyn_ocbotchannelregistrationsecret_ocbotchannelregistrationid` | _n/a_ | `msdyn_ocbotchannelregistrationid` | _n/a_ |
| `msdyn_ocbotchannelregistration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocbotchannelregistration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocbotchannelregistration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocbotchannelregistration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocbotchannelregistration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocbotchannelregistration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocbotchannelregistration.md) on 2026-05-06.