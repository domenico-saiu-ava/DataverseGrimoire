---
logical: "msdyn_taggedrecord"
display: "Tagged Record"
entitySetName: "msdyn_taggedrecords"
primaryId: "msdyn_taggedrecordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tagged Record

Tagged Record - Copilot for Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_taggedrecord` |
| Display name | Tagged Record |
| Display (plural) | Tagged Records |
| Schema name | `msdyn_taggedrecord` |
| Entity set (Web API) | `msdyn_taggedrecords` |
| Primary id attribute | `msdyn_taggedrecordid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_taggedrecords?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_taggedrecords(<guid>)
POST /api/data/v9.2/msdyn_taggedrecords
PATCH /api/data/v9.2/msdyn_taggedrecords(<guid>)
DELETE /api/data/v9.2/msdyn_taggedrecords(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_connectionid`, `msdyn_crmrecordid`, `msdyn_dynamicsrecordid`, `msdyn_emailid`, `msdyn_name`, `msdyn_producttype`, `msdyn_recordtype`, `msdyn_taggedrecordid`, `msdyn_userid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_taggedrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_taggedrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_taggedrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_taggedrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_taggedrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_taggedrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_taggedrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_taggedrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_crmconnection_msdyn_taggedrecord_connectionid` | [msdyn_crmconnection](msdyn_crmconnection.md) | `msdyn_connectionid` | `msdyn_connectionid` |
| `msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid` | [contact](contact.md) | `msdyn_dynamicsrecordid` | `msdyn_dynamicsrecordid_contact` |
| `msdyn_msdyn_taggedrecord_lead_msdyn_dynamicsrecordid` | [lead](lead.md) | `msdyn_dynamicsrecordid` | `msdyn_dynamicsrecordid_lead` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_taggedrecord_SyncErrors` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_DuplicateMatchingRecord` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_DuplicateBaseRecord` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `baserecordid` | `baserecordid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_AsyncOperations` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_MailboxTrackingFolders` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_UserEntityInstanceDatas` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `objectid` | `objectid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_ProcessSession` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_BulkDeleteFailures` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_PrincipalObjectAttributeAccesses` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `objectid` | `objectid_msdyn_taggedrecord` |
| `msdyn_taggedrecord_Annotations` | [msdyn_taggedrecord](msdyn_taggedrecord.md) | `objectid` | `objectid_msdyn_taggedrecord` |


## Source

Generated from [msdyn_taggedrecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_taggedrecord')) on 2026-05-07.