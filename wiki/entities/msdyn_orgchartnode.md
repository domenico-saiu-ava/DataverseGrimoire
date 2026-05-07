---
logical: "msdyn_orgchartnode"
display: "Microsoft Orgchart node entity"
entitySetName: "msdyn_orgchartnodes"
primaryId: "msdyn_orgchartnodeid"
primaryName: "new_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Microsoft Orgchart node entity

For internal use only. Entity which stores association data of account with contacts present in the orgchart hierarchy of the account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_orgchartnode` |
| Display name | Microsoft Orgchart node entity |
| Display (plural) | Microsoft Orgchart node entities |
| Schema name | `msdyn_orgchartnode` |
| Entity set (Web API) | `msdyn_orgchartnodes` |
| Primary id attribute | `msdyn_orgchartnodeid` |
| Primary name attribute | `new_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_orgchartnodes?$select=new_name&$top=10
GET /api/data/v9.2/msdyn_orgchartnodes(<guid>)
POST /api/data/v9.2/msdyn_orgchartnodes
PATCH /api/data/v9.2/msdyn_orgchartnodes(<guid>)
DELETE /api/data/v9.2/msdyn_orgchartnodes(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_noderecord`, `msdyn_orgchartnodeId`, `msdyn_parentrecord`, `new_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_msdyn_orgchartnode_msdyn_parentrecord` | [account](account.md) | `msdyn_parentrecord` | `msdyn_parentrecord` |
| `business_unit_msdyn_orgchartnode` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `contact_msdyn_orgchartnode_msdyn_noderecord` | [contact](contact.md) | `msdyn_noderecord` | `msdyn_noderecord` |
| `lk_msdyn_orgchartnode_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_orgchartnode_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_orgchartnode_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_orgchartnode_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_orgchartnode` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_orgchartnode` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_orgchartnode` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_orgchartnode_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_orgchartnode_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_orgchartnode_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_orgchartnode_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_orgchartnode_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_orgchartnode_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_orgchartnode_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_orgchartnode_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_orgchartnode.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_orgchartnode.md) on 2026-05-06.