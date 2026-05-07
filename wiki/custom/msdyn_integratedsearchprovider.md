---
logical: "msdyn_integratedsearchprovider"
display: "Provider di ricerca integrato"
entitySetName: "msdyn_integratedsearchproviders"
primaryId: "msdyn_integratedsearchproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Provider di ricerca integrato

Inserisci e cerca file, documenti o articoli da origini dati esterne all'organizzazione Dynamics 365 corrente con una classificazione unificata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_integratedsearchprovider` |
| Display name | Provider di ricerca integrato |
| Display (plural) | Provider di ricerca integrati |
| Schema name | `msdyn_integratedsearchprovider` |
| Entity set (Web API) | `msdyn_integratedsearchproviders` |
| Primary id attribute | `msdyn_integratedsearchproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_integratedsearchproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_integratedsearchproviders(<guid>)
POST /api/data/v9.2/msdyn_integratedsearchproviders
PATCH /api/data/v9.2/msdyn_integratedsearchproviders(<guid>)
DELETE /api/data/v9.2/msdyn_integratedsearchproviders(<guid>)
```

## Attributes

Writable: **25** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_allowedlanguages`, `msdyn_articlepropertiesmapping`, `msdyn_authenticationtype`, `msdyn_clientid`, `msdyn_clientsecret`, `msdyn_datasourcetype`, `msdyn_description`, `msdyn_htmlmetatags`, `msdyn_includedsitemapurls`, `msdyn_integratedsearchproviderid`, `msdyn_isfieldmappingoptionselected`, `msdyn_lastfetchtime`, `msdyn_lookbackperiod`, `msdyn_name`, `msdyn_refreshschedule`, `msdyn_resourceid`, `msdyn_rooturl`, `msdyn_tenantid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_htmlsample`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_integratedsearchprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_integratedsearchprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_integratedsearchprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_integratedsearchprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_integratedsearchprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_integratedsearchprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_integratedsearchprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_integratedsearchprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_integratedsearchprovider_msdyn_htmlsample` | [fileattachment](fileattachment.md) | `msdyn_htmlsample` | `msdyn_htmlsample` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_integratedsearchprovider_SyncErrors` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_DuplicateMatchingRecord` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_DuplicateBaseRecord` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `baserecordid` | `baserecordid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_AsyncOperations` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_MailboxTrackingFolders` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_UserEntityInstanceDatas` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `objectid` | `objectid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_ProcessSession` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_BulkDeleteFailures` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_PrincipalObjectAttributeAccesses` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `objectid` | `objectid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_FileAttachments` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `objectid` | `objectid_msdyn_integratedsearchprovider` |
| `msdyn_knowledgearticle_integratedsearchprovider` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `msdyn_integratedsearchproviderid` | `msdyn_integratedsearchproviderid` |


## Source

Generated from [msdyn_integratedsearchprovider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_integratedsearchprovider')) on 2026-05-07.