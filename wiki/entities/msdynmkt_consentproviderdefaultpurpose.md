---
logical: "msdynmkt_consentproviderdefaultpurpose"
display: "Default purpose"
entitySetName: "msdynmkt_consentproviderdefaultpurposes"
primaryId: "msdynmkt_consentproviderdefaultpurposeid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Default purpose

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentproviderdefaultpurpose` |
| Display name | Default purpose |
| Display (plural) | Consent Provider Default Purposes |
| Schema name | `msdynmkt_consentproviderdefaultpurpose` |
| Entity set (Web API) | `msdynmkt_consentproviderdefaultpurposes` |
| Primary id attribute | `msdynmkt_consentproviderdefaultpurposeid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes(<guid>)
POST /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes
PATCH /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentproviderdefaultpurposes(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_consentproviderdefaultpurposeId`, `msdynmkt_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_consentproviderdefaultpurpose` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_consentproviderdefaultpurpose_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentproviderdefaultpurpose_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentproviderdefaultpurpose_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentproviderdefaultpurpose_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_consentproviderdefaultpurpose` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_consentproviderdefaultpurpose` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_consentproviderdefaultpurpose` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentproviderdefaultpurpose_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultpurpose_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultpurpose_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_consentproviderdefaultpurpose_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_consentproviderdefaultpurpose_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultpurpose_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultpurpose_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultpurpose_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_purpose_msdynmkt_consentproviderdefaultpurpose` | _n/a_ | `msdynmkt_extendedentityid` | _n/a_ |


## Source

Generated from [msdynmkt_consentproviderdefaultpurpose.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consentproviderdefaultpurpose.md) on 2026-05-06.