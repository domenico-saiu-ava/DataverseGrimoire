---
logical: "msdyn_ocprovisioningstate"
display: "Provisioning State"
entitySetName: "msdyn_ocprovisioningstates"
primaryId: "msdyn_ocprovisioningstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Provisioning State

Provisioning state

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocprovisioningstate` |
| Display name | Provisioning State |
| Display (plural) | Provisioning States |
| Schema name | `msdyn_ocprovisioningstate` |
| Entity set (Web API) | `msdyn_ocprovisioningstates` |
| Primary id attribute | `msdyn_ocprovisioningstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocprovisioningstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocprovisioningstates(<guid>)
POST /api/data/v9.2/msdyn_ocprovisioningstates
PATCH /api/data/v9.2/msdyn_ocprovisioningstates(<guid>)
DELETE /api/data/v9.2/msdyn_ocprovisioningstates(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_errormessage`, `msdyn_name`, `msdyn_ocprovisioningstateId`, `msdyn_provisioningresponse`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocprovisioningstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocprovisioningstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocprovisioningstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocprovisioningstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocprovisioningstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocprovisioningstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocprovisioningstate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocprovisioningstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocprovisioningstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocprovisioningstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocprovisioningstate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocprovisioningstate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocprovisioningstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocprovisioningstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocprovisioningstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocprovisioningstate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocprovisioningstate.md) on 2026-05-06.